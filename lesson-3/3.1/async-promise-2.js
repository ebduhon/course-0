
const fs = require('fs');

const readFileAsArray = function(file, cb = () => {}) {
    return new Promise((resolve, reject) => {
       fs.readFile(file, function(err, data) {
            if (err) {
                reject(err);
                return cb(err);
            }
            
            const lines = data.toString().trim().split('\n');
            resolve(lines);
            cb(null, lines);
        }); 
    });
};

async function countOdd() {
    try {
        const lines = await readFileAsArray('./numbers.txt');
        const numbers = lines.map(Number);
        const oddCount = numbers.filter(number => number % 2 === 1).length;
        console.log(`odd numbers count: ${oddCount}`);
    } catch (err) {
        console.error(err);
    }
}

countOdd();