const express = require('express');
const hbs = require('express-handlebars');

const dataService = require('./data/cubeService');
const accessoryService = require('./data/accessoryService');
const db = require('./data/database');

const { home } = require('./controllers/home');
const { about } = require('./controllers/about');
const { notFound } = require('./controllers/notFound');
const create = require('./controllers/create');
const { details } = require('./controllers/details');
const { deletePage } = require('./controllers/deleteController');
const edit = require('./controllers/edit');
const createaccessory = require('./controllers/createAccessory');
const attachAccessory = require('./controllers/attachAccessory');

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

    app.get('/', home);
    app.get('/about', about);
    app.get('/details/:id', details);
    app.get('/delete/:id', deletePage)

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

    app.all('*', notFound);

    app.listen(3000, () => console.log('Server is listening on port 3000'))
}
start()