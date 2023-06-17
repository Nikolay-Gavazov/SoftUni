const express = require('express');
const hbs = require('express-handlebars');
const cookieParser = require('cookie-parser');

const db = require('./data/database');
const hotelService = require('./data/hotelService');
const userService = require('./data/userService');

const { home } = require('./controllers/home');
const { notFound } = require('./controllers/notFound');
const deleteController = require('./controllers/deleteController');
const { catalog } = require('./controllers/catalog');
const details = require('./controllers/details');
const create = require('./controllers/create');
const edit = require('./controllers/edit');
const auth = require('./controllers/auth');
const profile = require('./controllers/profile')
const {autMidd } = require('./middlewares/authMidd')

async function start() {
    await db();
    const app = express();

    app.engine('hbs', hbs.create({
        extname: '.hbs'
    }).engine);
    
    app.set('view engine', 'hbs');

    app.use(express.urlencoded({ extended: true }));
    app.use('/static', express.static('static'));
    app.use(cookieParser());
    app.use(userService());
    app.use(hotelService());
    app.use(auth);
    app.use(autMidd);
    
    app.get('/', home);
    app.get('/catalog', catalog);
    
    app.use(edit);
    app.use(create);
    app.use(details);
    app.use(profile);
    app.use(deleteController);

    app.all('*', notFound);

    app.listen(3000, () => console.log('Server is listening on port 3000'))
}
start()