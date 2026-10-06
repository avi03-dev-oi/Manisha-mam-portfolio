import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('.', import.meta.url));
const port = Number(process.env.PORT || 3000);
const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = createServer(async (req, res) => {
  const pathname = new URL(req.url || '/', `http://${req.headers.host || 'localhost'}`).pathname;
  const requestedFile = pathname === '/'
    ? 'index.html'
    : pathname === '/manus-routes.json'
      ? 'public/manus-routes.json'
      : pathname.replace(/^\/+/, '');
  const safePath = normalize(requestedFile).replace(/^\.\.(?:[\\/]|$)/, '');
  const filePath = join(root, safePath);

  try {
    const body = await readFile(filePath);
    res.writeHead(200, {
      'Content-Type': types[extname(filePath)] || 'application/octet-stream',
      'Cache-Control': 'no-cache'
    });
    res.end(body);
  } catch {
    if (!extname(pathname)) {
      const body = await readFile(join(root, 'index.html'));
      res.writeHead(200, { 'Content-Type': types['.html'], 'Cache-Control': 'no-cache' });
      res.end(body);
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Not found');
    }
  }
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Manisha Dhar portfolio listening on http://0.0.0.0:${port}`);
});
