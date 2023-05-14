const addCatPage = require('../views/addCat');
const {IncomingForm} = require('formidable');
const breed = require('../data/breeds');
const cats = require('../data/cats')

function addCatController(req, res){
    res.write(addCatPage(breed));
    res.end();
}

function createCat(req, res){
    const form = new IncomingForm();
    form.parse(req, (err, fields) =>{
        const id = 'xxxxxxx'.replace(/x/g, () => (Math.random() * 16 | 0).toString(16));
        cats.push({
            id,
            name: fields.name,
            description: fields.description,
            img: fields.img,
            breed: fields.breed
        });
    });

    res.writeHead(301, {
        'Location': '/'
    });

    res.end();
    
}

module.exports = {
    addCatController,
    createCat
}