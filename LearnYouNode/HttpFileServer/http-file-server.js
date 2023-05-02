const http = require('http');
const fs = require('fs');

const port = process.argv[2];
const filePath = process.argv[3];

const server = http.createServer((req, res) => {
    // Use fs.createReadStream() to stream the file contents to the response
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
});

server.listen(port, () => {
    console.log(`Started listening on port ${port}!`);
});
