const addCatPage = require('../views/addCat');
const {IncomingForm} = require('formidable');
const breed = require('../data/breeds');
const cats = require('../data/cats')

function addCatController(req, res){
    res.write(addCatPage(breed));
    res.end();
}

function createCat(req, res){
    const form = new IncomingForm();
    form.parse(req, (err, fields) =>{
        cats.push(fields);
    });

    res.writeHead(301, {
        'Location': '/add-cat'
    });

    res.end();
    
}

module.exports = {
    addCatController,
    createCat
}