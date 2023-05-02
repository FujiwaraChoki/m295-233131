const fs = require('fs');

const readFiles = (dirPath, fileExtension, callback) => {
    const files = [];
    fs.readdir(dirPath, (err, data) => {
        if (err) return callback(err);
        data.map(file => {
            if (file.endsWith(fileExtension)) {
                files.push(file);
            }
        });
        callback(null, files)
    });
};

module.exports = readFiles;
