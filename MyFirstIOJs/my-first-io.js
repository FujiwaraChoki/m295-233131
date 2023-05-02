const fs = require('fs');
const filePath = process.argv[2];

const readFile = () => {
    return fs.readFileSync(filePath);
}

const newlineCount = readFile().toString().split('\n').length -1;

console.log(newlineCount)
