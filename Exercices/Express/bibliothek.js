// Bibliothek
const express = require('express');
const books = require('./data/books.json');
const lends = require('./data/lends.json');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/books', (req, res) => {
    res.status(200).json(books);
});

app.get('/books/:isbn', (req, res) => {
    const isbn = req.params.isbn;
    const book = books.find(book => book.isbn === isbn);
    if (book) {
        res.status(200).json(book);
    } else {
        res.status(404).json({ message: `Buch mit ISBN ${isbn} nicht gefunden` });
    }
});

app.post('/books', (req, res) => {
    const book = req.body;
    const isbn = book.isbn;
    const existingBook = books.find(book => book.isbn === isbn);
    if (existingBook) {
        res.status(409).json({ message: `Buch mit ISBN ${isbn} existiert bereits` });
    } else {
        books.push(book);
        res.status(201).json({ message: `Buch mit ISBN ${isbn} wurde erstellt` });
    }
});

app.put('/books/:isbn', (req, res) => {
    const isbn = req.params.isbn;
    const book = req.body;

    const existingBook = books.find(book => book.isbn === isbn);
    if (existingBook) {
        const index = books.indexOf(existingBook);
        books[index] = book;

        res.status(200).json({ message: `Buch mit ISBN ${isbn} wurde aktualisiert` });
    } else {
        res.status(404).json({ message: `Buch mit ISBN ${isbn} nicht gefunden` });
    }
});

app.delete('/books/:isbn', (req, res) => {
    const isbn = req.params.isbn;
    const existingBook = books.find(book => book.isbn === isbn);
    if (existingBook) {
        const index = books.indexOf(existingBook);
        books.splice(index, 1);

        res.status(200).json({ message: `Buch mit ISBN ${isbn} wurde gelöscht` });
    } else {
        res.status(404).json({ message: `Buch mit ISBN ${isbn} nicht gefunden` });
    }
});

app.get('/lends', (req, res) => {
    res.status(200).json(lends);
});

app.get('/lends/:id', (req, res) => {
    const id = req.params.id;
    const lend = lends.find(lend => lend.id === id);
    if (lend) {
        res.status(200).json(lend);
    } else {
        res.status(404).json({ message: `Ausleihe mit ID ${id} nicht gefunden` });
    }
});

app.post('/lends', (req, res) => {
    const lend = req.body;
    const id = lend.id;

    const existingLend = lends.find(lend => lend.id === id);
    if (existingLend) {
        res.status(409).json({ message: `Ausleihe mit ID ${id} existiert bereits` });
    } else {
        lends.push(lend);
        res.status(201).json({ message: `Ausleihe mit ID ${id} wurde erstellt` });
    }
});

app.patch('/lends/:id', (req, res) => {
    const id = req.params.id;
    const lend = req.body;

    const existingLend = lends.find(lend => lend.id === id);
    if (existingLend) {
        const index = lends.indexOf(existingLend);
        lends[index] = lend;

        res.status(200).json({ message: `Ausleihe mit ID ${id} wurde aktualisiert` });
    } else {
        res.status(404).json({ message: `Ausleihe mit ID ${id} nicht gefunden` });
    }
});

app.listen(port, () => {
    console.log(`Server gestartet auf => http://localhost:${port}`);
});
