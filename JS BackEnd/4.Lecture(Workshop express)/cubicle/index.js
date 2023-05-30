const express = require('express');
const hbs = require('express-handlebars');

const dataService = require('./data/service');
const db = require('./data/database');

const { home } = require('./controllers/home');
const { about } = require('./controllers/about');
const { notFound } = require('./controllers/notFound');
const create = require('./controllers/create');
const { details } = require('./controllers/details');

async function start() {
    await db();
    const app = express();

    app.engine('hbs', hbs.create({
        extname: '.hbs'
    }).engine);

    app.set('view engine', 'hbs');

    app.use(express.urlencoded({ extended: true }));
    app.use('/static', express.static('static'));
    app.use(dataService());

    app.get('/', home);
    app.get('/about', about);
    app.get('/details/:id', details);

    app.route('/create')
        .get(create.get)
        .post(create.post);

    app.all('*', notFound);

    app.listen(3000, () => console.log('Server is listening on port 3000'))
}
start()