const { createData } = require('../data');
const { loadFragment, render } = require('../view');


function addBreedController(req, res) {
    loadFragment('addBreed', fragment => {
        const html = render(fragment);
        res.write(html);
        res.end();
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
        .reduce((r, [k,v]) => Object.assign(r, {[k]: decodeURIComponent(v.split('+').join(' ')) }), {} );

        res.writeHead(301, {
            'Location': '/'
        });
        res.end();
        createData(formdata, 'breeds')
    })
}
module.exports = {
    addBreedController,
    createBreed
}