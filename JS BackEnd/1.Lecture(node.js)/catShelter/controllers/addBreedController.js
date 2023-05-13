const addBreedPage = require('../views/addBreed');

function addBreedController(req, res){
    res.write(addBreedPage);
    res.end();
}

function createBreed(req, res){
    console.log(req.body);
    res.write('Creating');
    res.end();
    
}
module.exports = {
    addBreedController,
    createBreed
}