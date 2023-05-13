const addBreedPage = require('../views/addBreed');
const {IncomingForm} = require('formidable');
const breeds = require('../data/breeds');

function addBreedController(req, res){
    res.write(addBreedPage);
    res.end();
}

function createBreed(req, res){
    const form = new IncomingForm();
    form.parse(req, (err, fields) =>{
        breeds.push(fields);
    });

    res.writeHead(301, {
        'Location': '/add-breed'
    });

    res.end();
    
}
module.exports = {
    addBreedController,
    createBreed
}