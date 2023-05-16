const { addBreed } = require('../util');
const { loadFragment, render } = require('../view');


function addBreedController(req, res) {
    loadFragment('addBreed', fragment => {
        const html = render(fragment);
        res.write(html);
        res.end();
    })

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