const dgram = require('dgram');
const PORT = 8000;
const HOST = '172.31.60.103'; /** see docs/overview.md/retrieve Cloud9 private ipv4 address **/

const client = dgram.createSocket('udp4');
const msg = Buffer.from('Pluralsight rocks.');

/** Buffer data, Buffer start "offset", Buffer end "length", port, host, cb **/
client.send(msg, 0, msg.length, PORT, HOST, (err) => {
    if (err) throw err;
    
    console.log('UDP message sent.');
    client.close();
});