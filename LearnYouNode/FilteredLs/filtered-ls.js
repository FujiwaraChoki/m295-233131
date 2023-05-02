const fs = require('fs');

const getFilesInDir = (dirPath, extension) => {
    fs.readdir(dirPath, (err, files) => {
        if (err) {
            console.log('Error:', err);
        } else {
            printFiles(files, extension);
        }
    });
};


const printFiles = (files, ext) => {
    files.forEach(file => {
        if (file.endsWith(`.${ext}`)) {
            console.log(file);
        }
    });
};


const dirPath = process.argv[2];
const extension = process.argv[3];

getFilesInDir(dirPath, extension);
