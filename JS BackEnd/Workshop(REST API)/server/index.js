const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./router');
const {auth} = require('./middlewares/authMiddleware');
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/furnitures')
    .then(() => console.log('DB Connected'))
    .catch(err => console.log(err));

app.use(express.urlencoded({extended: false}));
app.use(express.json());
//app.use(cors());
app.use(auth);
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
})
app.get('/', (req, res) => {
    res.send('<h1>RESTful service</h1>');
    
})

app.use(routes);

app.listen(3030, ()=> console.log('RESTful server on port 3030'));