const cats = require('../data/cats');
const catShelter = require('../views/catShelter');
const { getCat } = require('./editController');

function catShelterController(req, res){
    const id = req.url.searchParams.get('id');
    const cat = getCat(id);
    res.write(catShelter(cat));
    res.end();
}

function deleteCat(req, res) {
    const id = req.url.searchParams.get('id');
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