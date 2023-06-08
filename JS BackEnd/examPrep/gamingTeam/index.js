const express = require('express');
const hbs = require('express-handlebars');
const cookieParser = require('cookie-parser');

const db = require('./data/database');
const gameService = require('./data/gameService');
const userService = require('./data/userService');

const { home } = require('./controllers/home');
const { notFound } = require('./controllers/notFound');
const { details } = require('./controllers/details');
const { deletePage } = require('./controllers/deleteController');
const create = require('./controllers/create');
const edit = require('./controllers/edit');
const auth = require('./controllers/auth')
const { catalog } = require('./controllers/catalog');

async function start() {
    await db();
    const app = express();

    app.engine('hbs', hbs.create({
        extname: '.hbs'
    }).engine);

    app.set('view engine', 'hbs');

    app.use(express.urlencoded({ extended: true }));
    app.use('/static', express.static('static'));
    app.use(gameService());
    app.use(cookieParser());
    app.use(userService());

    app.get('/', home);
    app.get('/catalog', catalog);
    app.get('/details/:id', details);
    app.get('/delete/:id', deletePage);

    app.route('/create')
        .get(create.get)
        .post(create.post);

    app.route('/edit/:id')
        .get(edit.get)
        .post(edit.post);

    app.use(auth)

    app.all('*', notFound);

    app.listen(3000, () => console.log('Server is listening on port 3000'))
} 
start()