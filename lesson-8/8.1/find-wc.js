
const { spawn } = require('child_process');

const find = spawn('find', ['.', '-type', 'f']);
const wc = spawn('wc', ['-l']); // counts lines only

find.stdout.pipe(wc.stdin)

wc.stdout.on('data', (data) => {
    console.log(`Number of files: ${data}`);
});

// other events on child: disconnect, error, message, close
// stdio objects: child.stdin, child.stdout, child.sdterr

// ctrl-d prints input of wc

