const express = require('express');

const app = express();

app.set('port', process.env.PORT || 3000);

// routes
app.get('/', (req, res) => {
    res.type('text/plain');
    res.send('Harrendhall Travel')
});

app.get('/about', (req, res) => {
    res.type('text/plain');
    res.send('About Harrendhall Travel');
})

// custom 404 page
app.use((req, res) => {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not found');
})

// custom 500 page
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server error');
});

app.listen(app.get('port'), () => {
    console.log(`Express started on http://localhost:${app.get('port')};`)
})