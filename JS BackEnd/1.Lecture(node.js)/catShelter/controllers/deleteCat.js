const cats = require('../data/cats');
const catShelter = require('../views/catShelter');
const { getCat, getId } = require('./editController');

function catShelterController(req, res){
    const id = getId(req);
    const cat = getCat(id);
    res.write(catShelter(cat));
    res.end();
}

function deleteCat(req, res) {
    const id = getId(req);
    const index = cats.indexOf(getCat(id));
    cats.splice(index, 1);

    res.writeHead(301, {
        'Location': '/'
    });
    res.end();
}


module.exports = {
    deleteCat,
    catShelterController
}