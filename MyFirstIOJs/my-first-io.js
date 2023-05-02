const fs = require('fs');
const filePath = process.argv[2];

const readFile = () => {
    return fs.readFileSync(filePath, 'utf-8');
}

const newlineCount = (readFile().match(/\n/g) || []).length;

console.log(newLines)
