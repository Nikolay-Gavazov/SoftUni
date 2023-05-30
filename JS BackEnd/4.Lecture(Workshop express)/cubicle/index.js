const express = require('express');
const hbs = require('express-handlebars');

const dataService = require('./data/service');
const { home } = require('./controllers/home');
const { about } = require('./controllers/about');
const { notFound } = require('./controllers/notFound');
const create = require('./controllers/create');

async function start(){

    const app = express();

    app.engine('hbs', hbs.create({
        extname: '.hbs'
    }).engine);

    app.set('view engine', 'hbs');

    app.use(express.urlencoded({extended: true}));
    app.use('/static', express.static('static'));
    app.use(dataService());

    app.get('/', home);
    app.get('/about', about);
    app.get('/details/:id');

    app.route('/create')
        .get(create.get)
        .post(create.post);

    app.all('*', notFound);
    
    app.listen(3000, () => console.log('Serve is listening on port 3000'))
}
start()