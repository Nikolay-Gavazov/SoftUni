const addCatPage = require('../views/addCat');

function addCatController(req, res){
    res.write(addCatPage);
    res.end();
}

module.exports = {
    addCatController
}