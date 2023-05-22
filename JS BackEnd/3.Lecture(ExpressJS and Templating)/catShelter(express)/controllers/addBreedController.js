const { createData } = require('../util');
const { loadFragment, render } = require('../view');


function addBreedController(req, res) {
    loadFragment('addBreed', fragment => {
        res.html(render(fragment));
    })

}

function createBreed(req, res) {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    })
    req.on('end', () => {
        const formdata = body
            .split('&')
            .map(prop => prop.split('='))
            .reduce((r, [k, v]) => Object.assign(r, { [k]: decodeURIComponent(v.split('+').join(' ')) }), {});

        res.redirect('/')
        createData(formdata, 'breeds')
    })
}
module.exports = {
    addBreedController,
    createBreed
}