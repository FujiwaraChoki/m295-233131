const express = require('express');
const fs = require('fs');
const names = require('./data/names.json');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/now', (req, res) => {
    res.status(200).send(new Date().toISOString());
});

app.get('/zli', (req, res) => {
    res.redirect(301, 'https://zli.ch');
});

app.get('/name', (req, res) => {
    const randomIndex = Math.floor(Math.random() * names.length);
    res.status(200).send(names[randomIndex]);
});

app.get('/html', (req, res) => {
    const htmlFileContents = fs.readFileSync('./data/exercice.html', 'utf8');
    res.status(200).send(htmlFileContents);
});

app.get('/image', (req, res) => {
    const imageFileContents = fs.readFileSync('./data/image.png');

    res.setHeader('Content-Type', 'image/png');
    res.status(200).send(imageFileContents);
});

app.get('/teapot', (req, res) => {
    res.status(418);
});

app.get('/user-agent', (req, res) => {
    const userAgent = req.get('User-Agent');
    res.status(200).send(userAgent);
});

app.get('/secret', (req, res) => {
    res.status(403);
});

app.get('/xml', (req, res) => {
    const xml = fs.readFileSync('./data/xml.xml', 'utf-8');

    res.setHeader('Content-Type', 'application/xml');
    res.status(200).send(xml);
});

app.get('/me', (req, res) => {
    res.status(200).send({
        vorname: 'Sami',
        nachname: 'Hindi',
        alter: 16,
        wohnort: 'Zürich',
        augenfarbe: 'Braun',
    });
});

app.listen(port, () => {
    console.log(`Server gestartet auf => http://localhost:${port}`);
});
