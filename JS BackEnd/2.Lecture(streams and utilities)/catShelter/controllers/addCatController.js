const addCatPage = require('../views/addCat');
const breed = require('../data/breeds');
const { createItem } = require('../util');

function addCatController(req, res) {
    res.write(addCatPage(breed));
    res.end();
}

function createCat(req, res) {
    createItem(req);
    res.writeHead(301, {
        'Location': '/'
    });
    res.end();
}

module.exports = {
    addCatController,
    createCat
}