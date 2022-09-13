const express = require('express');
const fortune = require('./libs/fortune.js')

const app = express();

// view engine
app.set('view engine', 'ejs')

app.set('port', process.env.PORT || 3000);

// routes
app.get('/', (req, res) => {
    res.render('home', {title: 'Welcome'})
})

app.get('/about', (req, res) => {
    res.render('about', {title: 'About Us', fortune: fortune.getFortune()})
})

// custom 404 page, catch-all handler
app.use((req, res) => {
    res.status(404).render('404', {title: 'Error not found'});
})

// custom 500 page, error handler middleware
app.use((req, res) => {
    res.status(500).render('500', {title: 'Server Error'})
});

app.listen(app.get('port'), () => {
    console.log(`Express started on http://localhost:${app.get('port')};`)
})
