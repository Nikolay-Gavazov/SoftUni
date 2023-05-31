const express = require('express');
const hbs = require('express-handlebars');

const db = require('./models/index');
const dataService = require('./data/util');

const createCat = require('./controllers/addCat');
const createBreed = require('./controllers/addBreed');
const edit = require('./controllers/edit');
const deleteCat = require('./controllers/deleteCat');

const { home } = require('./controllers/home');
const { notFound } = require('./controllers/notFound');

start()

async function start(){
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

app.route('/create-cat')
    .get(createCat.get)
    .post(createCat.post);

app.route('/create-breed')
    .get(createBreed.get)
    .post(createBreed.post);

app.route('/edit/:id')
    .get(edit.get)
    .post(edit.post);

app.route('/delete/:id')
    .get(deleteCat.get)
    .post(deleteCat.post);

app.all('*', notFound);

app.listen(3000, () => console.log('Server works on port 3000'));
}