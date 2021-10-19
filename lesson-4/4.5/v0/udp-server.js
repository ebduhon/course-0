const dgram = require('dgram');
const PORT = 8000;
const HOST = '172.31.60.103'; /** see docs/overview.md/retrieve Cloud9 private ipv4 address **/

const server = dgram.createSocket('udp4');

server.on('listening', () => console.log('UDP Server listening.'));

server.on('message', (msg, rinfo) => {
    console.log(`${rinfo.address}:${rinfo.port} - ${msg}`)
});


server.bind(PORT, HOST);