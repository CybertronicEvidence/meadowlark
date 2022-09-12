const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.type('text/plain');
    res.send('Hello World')
}).listen(3000, () => {
    console.log('Listening at 3000')
})

app.get('/about', (req, res) => {
    res.type('text/plain').status(200).send('This is the about page')
})

app.use((req, res) => {
    res.type('text/plain').status(404).send('404 - Not found')
})