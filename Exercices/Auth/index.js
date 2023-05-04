import express from 'express';
import session from 'express-session';

const app = express();
const port = 3000;

app.use(session({
    secret: 'my-secret-key',
    resave: false,
    saveUninitialized: false
}));

app.use(express.json());

app.post('/name', (req, res) => {
    const name = req.body.name;
    req.session.name = name;
    res.send('Name saved to session');
});

app.get('/name', (req, res) => {
    const name = req.session.name;
    console.log(name);
    res.send(name || 'No name in session');
});

app.delete('/name', (req, res) => {
    delete req.session.name;
    res.send('Name deleted from session');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
