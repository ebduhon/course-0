const { spawn } = require('child_process');

// const child = spawn('find', ['.', '-type', 'f'], {
//     stdio: 'inherit'
// });

// shell mode
// const child = spawn('find . -type f', {
//     stdio: 'inherit',
//     shell: true
// });

// Different cwd
// const child = spawn('find . -type f | wc -l', {
//     stdio: 'inherit',
//     shell: true,
//     cwd: '../'
// });

// const child = spawn('echo $HOME', {
//     stdio: 'inherit',
//     shell: true
// });

const child = spawn('echo $ANSWER', {
    stdio: 'inherit',
    shell: true,
    env: { ANSWER: 42}
});
