const addBreedPage = require('../views/addBreed');
const {IncomingForm} = require('formidable');

function addBreedController(req, res){
    res.write(addBreedPage);
    res.end();
}

function createBreed(req, res){
    const form = new IncomingForm();
    form.parse(req);

    res.writeHead(301, {
        'Location': '/add-breed'
    });

    res.end();
    
}
module.exports = {
    addBreedController,
    createBreed
}