const catShelter = require('../views/catShelter');
const { getItem, deteleItem, getParams } = require('../util');

function catShelterController(req, res){
    const cat = getItem(getParams(req, 'id'));
    res.write(catShelter(cat));
    res.end();
}

function deleteCat(req, res) {
    deteleItem(getParams(req, 'id'));
    res.writeHead(301, {
        'Location': '/'
    });
    res.end();
}


module.exports = {
    deleteCat,
    catShelterController
}