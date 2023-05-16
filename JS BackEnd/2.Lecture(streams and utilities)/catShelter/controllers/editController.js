const { getItem, getParams, getData, editData, getFormData } = require('../util');
const { loadFragment, render } = require('../view');

async function editController(req, res) {
    const cat = await getItem(getParams(req, 'id'), 'cats');
    const breeds = await getData('breeds');
    
    loadFragment('editCat', fragment => {
        const html = fragment
        .replace('{{{id}}}', cat._id)
        .replace('{{{name}}}', cat.name)
        .replace('{{{description}}}', cat.description)
        .replace('{{{img}}}', cat.img)
        .replace(
            '{{{breeds}}}',
            breeds.map(el => `
            <option value="${el.breed}">${el.breed}</option>`).join('\n'))
            res.html(render(html));  
    });
}

function editCat(req, res) {
    const _id = getParams(req, 'id');
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    })
    req.on('end', () => {
        res.redirect('/')
        editData(getFormData(body), _id, 'cats')
    })
}

module.exports = {
    editController,
    editCat,
}