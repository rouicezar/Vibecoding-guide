// Small read-only test server. Production subpath is mounted without modifying files.
import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
const root = resolve(process.env.TEST_DIST || 'dist');
const base = process.env.TEST_BASE || '';
const mime = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.wasm': 'application/wasm',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.webp': 'image/webp',
};
http
  .createServer(async (req, res) => {
    try {
      const path = decodeURIComponent(
        new URL(req.url, 'http://localhost').pathname,
      );
      if (base && !path.startsWith(base + '/')) {
        res.writeHead(404).end();
        return;
      }
      let file = resolve(root, '.' + path.slice(base.length));
      if (file !== root && !file.startsWith(root + sep)) {
        res.writeHead(403).end();
        return;
      }
      if ((await stat(file)).isDirectory()) file = resolve(file, 'index.html');
      res
        .writeHead(200, {
          'Content-Type': mime[extname(file)] || 'application/octet-stream',
          'Cache-Control': 'no-store',
        })
        .end(await readFile(file));
    } catch {
      res.writeHead(404).end('Not found');
    }
  })
  .listen(Number(process.env.TEST_PORT || 4342), '127.0.0.1', () =>
    console.log(
      `Serving ${root} at http://127.0.0.1:${process.env.TEST_PORT || 4342}${base}/`,
    ),
  );
