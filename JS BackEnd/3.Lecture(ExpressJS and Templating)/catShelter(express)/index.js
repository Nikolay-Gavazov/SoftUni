const express = require('express');
const hbs = require('express-handlebars');

const dataService = require('./data/util');
const { home } = require('./controllers/home');
const { notFound } = require('./controllers/notFound');

const app = express();

app.engine('hbs', hbs.create({
    extname: '.hbs'
}).engine);

app.set('view engine', 'hbs');

app.use(express.urlencoded({ extended: true }));
app.use('/static', express.static('static'));
app.use(dataService());

app.get('/', home);


app.all('*', notFound);

app.listen(3000, () => console.log('Server works on port 3000'));