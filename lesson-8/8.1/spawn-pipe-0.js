
const { spawn } = require('child_process');

const child = spawn('wc'); // counts words lines and characters

process.stdin.pipe(child.stdin);

child.stdout.on('data', (data) => {
    console.log(`child stdout: ${data}`);
});

child.stderr.on('data', (data) => {
    console.log(`child stderr: ${data}`);
});

child.on('exit', function(code, signal) {
    console.log(`child process exited with code ${code}, signal ${signal}`);
});

// other events on child: disconnect, error, message, close
// stdio objects: child.stdin, child.stdout, child.sdterr

// ctrl-d prints input of wc

