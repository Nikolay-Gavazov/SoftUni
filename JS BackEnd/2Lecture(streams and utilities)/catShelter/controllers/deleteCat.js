const { getItem, getParams, deleteData } = require("../util");
const { render, loadFragment } = require("../view");


async function catShelterController(req, res) {
    const cat = await getItem(getParams(req, 'id'), 'cats');

    loadFragment('catShelter', fragment => {
        const html = fragment
            .replace('{{{id}}}', cat._id)
            .replace('{{{name}}}', cat.name)
            .replace('{{{description}}}', cat.description)
            .replace('{{{img}}}', cat.img)
            .replace('{{{breed}}}', cat.breed)
        res.html(render(html));
    });
}

function deleteCat(req, res) {
    deleteData(getParams(req, 'id'), 'cats');

    res.redirect('/')
}

module.exports = {
    deleteCat,
    catShelterController
}