const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
    // fs.readFile('big-file.txt', (err, data) => {
    //     if (err) throw err;
        
    //     res.end(data);
    // });
    
    const src = fs.createReadStream('./big-file.txt');
    src.pipe(res);
});

server.listen(8000);