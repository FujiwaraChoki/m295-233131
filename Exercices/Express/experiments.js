const express = require('express');
const fs = require('fs');
const names = require('./data/names.json');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/now', (req, res) => {
    const timeZone = req.query.tz;
    const date = new Date();
    const dateInTimeZone = date.toLocaleString('de-CH', { timeZone });

    res.status(200).send(dateInTimeZone);
});

app.post('/name', (req, res) => {
    const { name } = req.body;

    if (!name) {
        res.status(400).send('Missing name');
    } else {
        names.push(name);
        fs.writeFileSync('./data/names.json', JSON.stringify(names, null, 2));
        res.status(200).send('Name added');
    }
});

app.delete('/name', (req, res) => {
    const { name } = req.body;

    if (!name) {
        res.status(400).send('Missing name');
    } else {
        const index = names.indexOf(name);
        if (index > -1) {
            names.splice(index, 1);
            fs.writeFileSync('./data/names.json', JSON.stringify(names, null, 2));
            res.status(204).send('Name deleted');
        } else {
            res.status(404).send('Name not found');
        }
    }
});

app.get('/secret2', (req, res) => {
    const auth = req.headers.authorization;

    if (auth === 'Basic aGFja2VyOjEyMzQ=') {
        res.status(200);
    } else {
        res.status(401);
    }
});

app.get('/chuck', (req, res) => {
    const name = req.query.name;

    let randomJoke = fetch('https://api.chucknorris.io/jokes/random', {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    }).then(res => res.json()).value;

    if (name) {
        randomJoke = randomJoke.replace('Chuck Norris', name);
    }

    res.status(200).send(randomJoke);
});

app.patch('/me', (req, res) => {
    const original = {
        vorname: 'Sami',
        nachname: 'Hindi',
        alter: 16,
        wohnort: 'Zürich',
        augenfarbe: 'Braun'
    };

    const { vorname, nachname, alter, wohnort, augenfarbe } = req.body;

    if (vorname) {
        original.vorname = vorname;
    }

    if (nachname) {
        original.nachname = nachname;
    }

    if (alter) {
        original.alter = alter;
    }

    if (wohnort) {
        original.wohnort = wohnort;
    }

    if (augenfarbe) {
        original.augenfarbe = augenfarbe;
    }

    res.status(200).json(original);
});

app.listen(port, () => {
    console.log(`Server gestartet auf => http://localhost:${port}`);
});
