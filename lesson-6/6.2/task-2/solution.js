const fs = require('fs');
const path = require('path');
const dirname = path.join(__dirname, 'files');

const ms1Day = 24*60*60*1000;
const files = fs.readdirSync(dirname);

// loop over the directory and read each file in the directory
files.forEach(file => {
    const filePath = path.join(dirname, file);
    // read the stats metadata for each file
    fs.stat(filePath, (err, stats) => {
        if (err) throw err;
        
        // If the file was not modified in the last 7 days then delete the file
        if ((Date.now() - stats.mtime.getTime() > 7*ms1Day)) {
            // delete the file
            fs.unlink(filePath, (err) => {
                if (err) throw err;
                console.log(`Deleted ${filePath}`);
            });
        }
    });
});

