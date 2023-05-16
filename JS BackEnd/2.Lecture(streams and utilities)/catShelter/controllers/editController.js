const editPage = require('../views/editCat');
const { editItem } = require('../util');
const { getItem, getParams, getData } = require('../data');

async function editController(req, res) {
    const cat = await getItem(getParams(req, 'id'), 'cats');
    const breeds = await getData('breeds');
    
    
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