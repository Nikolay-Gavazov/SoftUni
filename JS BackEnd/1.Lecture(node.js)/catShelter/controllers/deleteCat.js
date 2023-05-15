const catShelter = require('../views/catShelter');
const { getItem, deteleItem, getParams } = require('../util');

function catShelterController(req, res){
    const id = getParams(req, 'id');;
    const cat = getItem(id);
    res.write(catShelter(cat));
    res.end();
}

function deleteCat(req, res) {
    const id = getParams(req, 'id');;
    deteleItem(id);
    res.writeHead(301, {
        'Location': '/'
    });
    res.end();
}


module.exports = {
    deleteCat,
    catShelterController
}