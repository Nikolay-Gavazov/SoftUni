const express = require('express');
const hbs = require('express-handlebars');
const cookieParser = require('cookie-parser');

const db = require('./data/database');
const photoService = require('./data/photoService');

const userService = require('./data/userService');

const { home } = require('./controllers/home');
const { notFound } = require('./controllers/notFound');
const { deletePage } = require('./controllers/deleteController');
const { catalog } = require('./controllers/catalog');
const { buy } = require('./controllers/buy');
const details = require('./controllers/details');
const create = require('./controllers/create');
const edit = require('./controllers/edit');
const auth = require('./controllers/auth');
const search = require('./controllers/search')

async function start() {
    await db();
    const app = express();

    app.engine('hbs', hbs.create({
        extname: '.hbs'
    }).engine);

    app.set('view engine', 'hbs');

    app.use(express.urlencoded({ extended: true }));
    app.use('/static', express.static('static'));
    app.use(photoService());
    app.use(cookieParser());
    app.use(userService());

    app.get('/', home);
    app.get('/catalog', catalog);
    app.get('/delete/:id', deletePage);
    app.get('/buy/:id', buy)

    app.use(edit);
    app.use(auth);
    app.use(create);
    app.use(search);
    app.use(details);

    app.all('*', notFound);

    app.listen(3000, () => console.log('Server is listening on port 3000'))
}
start()