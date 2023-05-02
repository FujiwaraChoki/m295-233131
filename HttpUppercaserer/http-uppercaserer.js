const http = require('http');

const port = process.argv[2];

const server = http.createServer((req, res) => {
    if (req.method !== 'POST') {
        // 400 wenn invalid method
        res.statusCode = 400;
        res.end();
    }

    let data = '';

    req.on('data', chunk => {
        data += chunk.toString().toUpperCase();
    });

    req.on('end', () => {
        res.end(data);
    });
});

server.listen(port, () => {
    console.log(`Server started listening on port ${port}!`);
});
