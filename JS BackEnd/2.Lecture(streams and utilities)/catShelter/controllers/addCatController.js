const { createItem } = require('../util');
const { getBreeds } = require('../data');
const { loadFragment, render } = require('../view');

async function addCatController(req, res) {
    const breeds = await getBreeds();

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
    createItem(req);
    res.writeHead(301, {
        'Location': '/'
    });
    res.end();
}

module.exports = {
    addCatController,
    createCat
}