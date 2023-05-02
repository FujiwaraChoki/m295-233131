const http = require('http');
const bl = require('bl');

const urls = [
    process.argv[2],
    process.argv[3],
    process.argv[4],
]

urls.forEach(url => {
    http.get(url, (response => {
        response.pipe(bl((err, data) => {
            if (err) {
                console.error(err);
                return;
            }

            console.log(data.toString());
        }));
    }));
});
