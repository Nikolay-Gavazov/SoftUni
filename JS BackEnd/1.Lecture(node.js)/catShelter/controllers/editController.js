const editPage = require('../views/editCat');
const cats = require('../data/cats');
const breeds = require('../data/breeds');
const { IncomingForm } = require('formidable');

function editController(req, res) {
    const id = req.url.searchParams.get('id');
    const cat = getCat(id);
    res.write(editPage(cat, breeds));
    res.end();
}

function editCat(req, res) {
    const id = req.url.searchParams.get('id');
    const index = cats.indexOf(getCat(id));

    const form = new IncomingForm();
    form.parse(req, (err, fields) => {
        cats[index] = {
            id,
            name: fields.name,
            description: fields.description,
            img: fields.img,
            breed: fields.breed
        };
    });
    res.writeHead(301, {
        'Location': '/'
    });
    res.end();
}

function getCat(id) {
    let cat = '';
    cats.forEach(el => {
        if (el.id == id) {
            cat = el;
        }
    });
    return cat;
}

module.exports = {
    editController,
    editCat,
    getCat,
}