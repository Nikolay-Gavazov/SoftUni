const express = require('express');
const hbs = require('express-handlebars');
const cookieParser = require('cookie-parser');

const db = require('./data/database');
const adService = require('./data/adService');
const userService = require('./data/userService');

const { home } = require('./controllers/home');
const { notFound } = require('./controllers/notFound');
const { deletePage } = require('./controllers/deleteController');
const { catalog } = require('./controllers/catalog');
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
    app.use(adService());
    app.use(cookieParser());
    app.use(userService());

    app.get('/', home);
    app.get('/catalog', catalog);
    app.get('/delete/:id', deletePage);

    app.use(edit);
    app.use(auth);
    app.use(create);
    app.use(details);
    app.use(search);

    app.all('*', notFound);

    app.listen(3000, () => console.log('Server is listening on port 3000'))
}
start()