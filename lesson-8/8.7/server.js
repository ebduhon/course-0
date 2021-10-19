const http = require('http');
const pid = process.pid;

http.createServer((req, res) => {
    for (let i=0; i<1e4; i++); //simulate CPU work
    res.end(`Handled by process ${pid}\n`);
}).listen(8080, () => {
    console.log(`Started process ${pid}`);
});