const readFiles = require('./mymodule');

const printFiles = (err, files) => {
    if (err) return console.log(err);

    files.map(file => {
        console.log(file);
    });
}

readFiles(process.argv[2], process.argv[3], printFiles);
