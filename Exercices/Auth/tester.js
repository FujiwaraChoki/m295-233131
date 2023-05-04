import fetch from 'node-fetch';

const baseUrl = 'http://localhost:3000';

fetch(`${baseUrl}/name`, { method: 'POST', body: 'name=John', })
    .then(res => res.text())
    .then(text => console.log(text));

fetch(`${baseUrl}/name`)
    .then(res => res.text())
    .then(text => console.log(text));

fetch(`${baseUrl}/name`, { method: 'DELETE' })
    .then(res => res.text())
    .then(text => console.log(text));

