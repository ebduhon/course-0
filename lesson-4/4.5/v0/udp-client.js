const dgram = require('dgram');
const PORT = 8000;
const HOST = '172.31.60.103'; /** see docs/overview.md/retrieve Cloud9 private ipv4 address **/



setInterval(function() {
    const client = dgram.createSocket('udp4');
    
    client.send('Pluralsight rocks', PORT, HOST, (err) => {
        if (err) throw err;
        
        console.log('UDP message sent.');
        client.close();
    });
}, 1000);

