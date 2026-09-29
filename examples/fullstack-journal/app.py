"""Local-only reference used to verify the guide's frontend/API/database journey."""
import os
import sqlite3
from pathlib import Path
from flask import Flask, jsonify, request

app = Flask(__name__, static_folder='static')
DB = Path(os.environ.get('JOURNAL_DB', Path(__file__).resolve().parent / 'instance/journal.sqlite')).resolve()
DB.parent.mkdir(parents=True, exist_ok=True)

def connect():
    connection = sqlite3.connect(DB)
    connection.row_factory = sqlite3.Row
    return connection

with connect() as connection:
    connection.execute('CREATE TABLE IF NOT EXISTS entries (id INTEGER PRIMARY KEY, title TEXT NOT NULL, body TEXT NOT NULL, created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP)')

@app.get('/')
def index():
    return app.send_static_file('index.html')

@app.get('/api/entries')
def read_entries():
    connection = connect()
    try:
        return jsonify([dict(row) for row in connection.execute('SELECT * FROM entries ORDER BY id DESC')])
    finally:
        connection.close()

@app.post('/api/entries')
def write_entry():
    data = request.get_json(silent=True)
    if not isinstance(data, dict):
        return jsonify(error='请发送标题和内容。'), 400
    title, body = data.get('title'), data.get('body')
    if not isinstance(title, str) or not isinstance(body, str):
        return jsonify(error='标题和内容必须是文字。'), 400
    title, body = title.strip(), body.strip()
    if not 1 <= len(title) <= 80 or not 1 <= len(body) <= 2000:
        return jsonify(error='标题需要 1–80 字，内容需要 1–2000 字。'), 400
    connection = connect()
    try:
        with connection:
            cursor = connection.execute('INSERT INTO entries(title, body) VALUES (?, ?)', (title, body))
            result = dict(connection.execute('SELECT * FROM entries WHERE id=?', (cursor.lastrowid,)).fetchone())
        return jsonify(result), 201
    finally:
        connection.close()

@app.errorhandler(sqlite3.Error)
def database_error(_error):
    app.logger.exception('Database operation failed')
    return jsonify(error='暂时无法读写记录，请保留输入，稍后再试。'), 503

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=int(os.environ.get('PORT', '5057')), debug=False)
