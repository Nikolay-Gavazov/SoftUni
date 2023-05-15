const editPage = require('../views/editCat');
const breeds = require('../data/breeds');
const { getItem, editItem, getParams } = require('../util');

function editController(req, res) {
    const cat = getItem(getParams(req, 'id'));
    res.write(editPage(cat, breeds));
    res.end();
}

function editCat(req, res) {
    editItem(req);
    res.writeHead(301, {
        'Location': '/'
    });
    res.end();
}

module.exports = {
    editController,
    editCat,
}