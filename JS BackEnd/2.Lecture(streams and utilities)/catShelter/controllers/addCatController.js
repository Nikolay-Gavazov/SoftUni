const { getData, createData, getFormData } = require('../util');
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
        res.redirect('/')
        createData(getFormData(body), 'cats')
    })
}

module.exports = {
    addCatController,
    createCat
}