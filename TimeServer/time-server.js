const net = require('net');

const server = net.createServer(socket => {
    const now = new Date();
    const formattedDate = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}`;
    socket.end(formattedDate + '\n');
});

function pad(number) {
    return (number < 10 ? '0' : '') + number;
}

server.listen(process.argv[2]);
