"""Isolated runtime checks; never opens the learner's real database."""
import json
import os
import socket
import sqlite3
import subprocess
import sys
import tempfile
import time
from pathlib import Path
from urllib.request import Request, urlopen
from urllib.error import HTTPError, URLError

with tempfile.TemporaryDirectory(prefix='journal-guide-') as folder:
    database=Path(folder)/'journal.sqlite'
    with socket.socket() as sock:
        sock.bind(('127.0.0.1',0)); port=sock.getsockname()[1]
    base=f'http://127.0.0.1:{port}'
    env={**os.environ,'PORT':str(port),'JOURNAL_DB':str(database)}
    process=None
    def start(db=database):
        global process
        process=subprocess.Popen([sys.executable,str(Path(__file__).with_name('app.py'))],env={**env,'JOURNAL_DB':str(db)},stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL)
        for _ in range(100):
            try:
                with urlopen(base+'/api/entries',timeout=.2): return
            except (URLError,TimeoutError): time.sleep(.05)
        raise RuntimeError('Practice server failed to start')
    def stop():
        if process is not None:
            process.terminate();process.wait(timeout=5)
    def api(data=None):
        request=Request(base+'/api/entries',data=json.dumps(data).encode() if data is not None else None,headers={'Content-Type':'application/json'})
        try:
            with urlopen(request,timeout=3) as response:return response.status,json.load(response)
        except HTTPError as error:return error.code,json.load(error)
    try:
        start()
        assert api()==(200,[])
        with urlopen(base) as page:assert b'form' in page.read()
        code,record=api({'title':'Practice A','body':'Learn frontend/backend/database'})
        assert code==201 and record['id']==1
        for data in [{'title':' ','body':'x'},{'title':'x'*81,'body':'x'},{'title':'x','body':'x'*2001},{'title':3,'body':'x'},[]]:
            assert api(data)[0]==400
        assert len(api()[1])==1
        with sqlite3.connect(database) as db: assert db.execute('SELECT title FROM entries WHERE id=1').fetchone()[0]=='Practice A'
        stop()
        try: urlopen(base+'/api/entries',timeout=.5);raise AssertionError('Server still responds')
        except URLError:pass
        start();assert api()[1][0]['id']==1
        backup=Path(folder)/'restored.sqlite'
        with sqlite3.connect(database) as source,sqlite3.connect(backup) as target:source.backup(target)
        stop();start(backup);assert api()[1][0]['title']=='Practice A'
        assert api({'title':'Restore only','body':'isolated'})[0]==201
        with sqlite3.connect(database) as db:assert db.execute('SELECT count(*) FROM entries').fetchone()[0]==1
        print('PASS: real HTTP create/read, backend rejection, SQLite evidence, stopped service, process restart and isolated backup/restore; original database preserved.')
    finally:stop()
