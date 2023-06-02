const express = require('express');
const hbs = require('express-handlebars');
const cookieParser = require('cookie-parser');

const dataService = require('./data/cubeService');
const accessoryService = require('./data/accessoryService');
const db = require('./data/database');
const userService = require('./data/userService');

const { home } = require('./controllers/home');
const { about } = require('./controllers/about');
const { notFound } = require('./controllers/notFound');
const create = require('./controllers/create');
const { details } = require('./controllers/details');
const { deletePage } = require('./controllers/deleteController');
const edit = require('./controllers/edit');
const createaccessory = require('./controllers/createAccessory');
const attachAccessory = require('./controllers/attachAccessory');
const login = require('./controllers/login');
const register = require('./controllers/register');
const { logout } = require('./controllers/logout');

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
    app.use(accessoryService());
    app.use(cookieParser());
    app.use(userService());

    app.get('/', home);
    app.get('/about', about);
    app.get('/details/:id', details);
    app.get('/delete/:id', deletePage);
    app.get('/logout', logout)

    app.route('/create')
        .get(create.get)
        .post(create.post);

    app.route('/edit/:id')
        .get(edit.get)
        .post(edit.post);

    app.route('/create/accessory')
        .get(createaccessory.get)
        .post(createaccessory.post);

    app.route('/details/:id/attach-accessory')
        .get(attachAccessory.get)
        .post(attachAccessory.post);

    app.route('/login')
        .get(login.get)
        .post(login.post);

    app.route('/register')
        .get(register.get)
        .post(register.post);

    app.all('*', notFound);

    app.listen(3000, () => console.log('Server is listening on port 3000'))
}
start()