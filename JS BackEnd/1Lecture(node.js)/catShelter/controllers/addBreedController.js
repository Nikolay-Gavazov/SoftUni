const { addBreed } = require('../util');
const addBreedPage = require('../views/addBreed');


function addBreedController(req, res) {
    res.write(addBreedPage);
    res.end();
}

function createBreed(req, res) {
    addBreed(req);
    res.writeHead(301, {
        'Location': '/add-breed'
    });

    res.end();

}
module.exports = {
    addBreedController,
    createBreed
}