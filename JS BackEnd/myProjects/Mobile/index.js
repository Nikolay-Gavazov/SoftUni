const express = require('express');
const hbs = require('express-handlebars');
const fileUpload = require('express-fileupload');
const cookieParser = require('cookie-parser');

const carsService = require('./data/carsService');
const optionsService = require('./data/optionsService');
const userService = require('./data/userService');
const db = require('./data/database');

const { home } = require('./controllers/homePage');
const { about } = require('./controllers/aboutPage');
const { details } = require('./controllers/detailsPage');
const { notFound } = require('./controllers/notFound');
const { deletePage } = require('./controllers/deletePage');
const { logout } = require('./controllers/logout');
const edit = require('./controllers/editPage');
const create = require('./controllers/createPage');
const register = require('./controllers/register');
const login = require('./controllers/login');


async function start(){
    await db();
    const app = express();

    app.engine('hbs', hbs.create({
        extname: '.hbs'
    }).engine);
    
    app.set('view engine', 'hbs');
    
    app.use(express.urlencoded({ extended: true }));
    app.use('/static', express.static('static'));
    app.use(carsService());
    app.use(userService());
    app.use(optionsService());
    app.use(cookieParser());
    app.use(fileUpload({createParentPath: true}));
    
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

    app.route('/register')
        .get(register.get)
        .post(register.post);

    app.route('/login')
        .get(login.get)
        .post(login.post);

    app.all('*', notFound)
    
    app.listen(3000, () => console.log('Server is listening on port 3000'));
}
start();



