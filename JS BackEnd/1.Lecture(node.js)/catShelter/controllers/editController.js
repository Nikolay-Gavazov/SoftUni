const editPage = require('../views/editCat');

function editController(req, res){
    res.write(editPage);
    res.end();
}

module.exports = {
    editController
}