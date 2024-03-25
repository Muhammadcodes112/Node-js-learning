const express = require('express');
const { result } = require('lodash');
const mongoose = require('mongoose');

// express app
const app = express();
const morgan = require('morgan')

// connect to mongodb
const dbURI = 'mongodb+srv://muhammad:funguy112@nodetutorial.7rrlrfk.mongodb.net/NodeTutorial'
mongoose.connect(dbURI)
    .then((result) => console.log('connected to db'))
    .catch((err) => console.log(err))

// register view engine
app.set('view engine', 'ejs');

// listen for requests
app.listen(3000);

//middle ware & static files
app.use(express.static('public'));
app.use(morgan('dev'));

// app.use((req, res, next) => {
//     console.log('new request made: ');
//     console.log('host: ', req.hostname);
//     console.log('path: ', req.path);
//     console.log('method: ', req.method);
//     next();
// });

// app.use((req, res, next) => {
//     console.log('In the next middle ware: ');
//     next();
// });

app.get('/', (req, res) => {
    const blogs = [
        { title: 'Yoshi find eggs', snippets: 'lorem ne da kan shi fa' },
        { title: 'Mario finds stars', snippets: 'lorem ne da kan shi fa' },
        { title: 'Avatar kora', snippets: 'lorem ne da kan shi fa' },
    ];
    res.render('index', { title: 'Home du travail', blogs });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About Page ' });
});

// redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create Blog' });
})


// 404 Page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});
