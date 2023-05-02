const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const iso = parsedUrl.query.iso;

    if (parsedUrl.pathname === '/api/parsetime') {
        const date = new Date(iso);
        const json = JSON.stringify({
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        });
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(json);
    } else if (parsedUrl.pathname === '/api/unixtime') {
        const unixtime = new Date(iso).getTime();
        const json = JSON.stringify({ unixtime: unixtime });
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(json);
    } else {
        res.writeHead(404);
        res.end();
    }
});

server.listen(process.argv[2]);
