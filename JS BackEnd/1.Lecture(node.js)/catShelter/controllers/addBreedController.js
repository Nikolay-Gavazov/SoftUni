const addBreedPage = require('../views/addBreed');

function addBreedController(req, res){
    res.write(addBreedPage);
    res.end();
}

function createBreed(req, res){
    res.write('Creating');
    res.end();
    
}
module.exports = {
    addBreedController,
    createBreed
}