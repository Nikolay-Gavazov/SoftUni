const editPage = require('../views/editCat');
const cats = require('../data/cats');
const breeds = require('../data/breeds')

function editController(req, res){
    const id = req.url.split('?')[1];
    let cat;
    cats.forEach(el => {
        if(el.id == id){
            cat = el;
        }
    });
    res.write(editPage(cat, breeds));
    res.end();
}

module.exports = {
    editController
}