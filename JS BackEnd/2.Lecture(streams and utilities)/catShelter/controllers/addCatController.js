const { getData, createData } = require('../data');
const { loadFragment, render } = require('../view');

async function addCatController(req, res) {
    const breeds = await getData('breeds');

    loadFragment('addCat', fragment => {
        const html = fragment.replace(
            '{{{breeds}}}',
            breeds.map(el => `
            <option value="${el.breed}">${el.breed}</option>`).join('\n'))
        res.write(render(html));
        res.end();
});
}

function createCat(req, res) {
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
        createData(formdata, 'cats')
    })
}

module.exports = {
    addCatController,
    createCat
}