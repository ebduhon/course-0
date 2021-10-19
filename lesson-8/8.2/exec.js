const { exec } = require('child_process');

exec('find . -type | wc -l', (err, stdout, stderr) => {
    if (err) {
        console.error(`exec error: ${err}`);
        return;
    }
    
    console.log(`Number of files ${stdout}`);
});

