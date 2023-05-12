const addBreedPage = require('../views/addBreed');
const addCatPage = require('../views/addCat');

function addBreedController(req, res){
    console.log(req);
    res.write(addBreedPage);
    res.end();
}

function addCatController(req, res){
    res.write(addCatPage);
    res.end();
}

module.exports = {
    addBreedController,
    addCatController
}