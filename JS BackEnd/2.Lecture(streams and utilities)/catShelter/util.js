const breeds = require("./data/breeds");
const cats = require("./data/cats");
const { IncomingForm } = require("formidable");

function nextId() {
    return 'xxxxxxxx'.replace(/x/g, () => (Math.random() * 16 | 0).toString(16));
};

function getParams(req, param) {
    return req.url.searchParams.get(param);
}

function getItem(id) {
    let cat = '';
    cats.forEach(el => {
        if (el.id == id) {
            cat = el;
        }
    });
    return cat;
};

function deteleItem(id) {
    const index = cats.indexOf(getItem(id));
    cats.splice(index, 1);
};

function addBreed(req) {
    const form = new IncomingForm();
    form.parse(req, (err, fields) => {
        breeds.push(fields);
    });
}

function createItem(req) {
    const form = new IncomingForm();
    const id = nextId();
    form.parse(req, (err, fields) => {
        cats.push({
            id,
            name: fields.name,
            description: fields.description,
            img: fields.img,
            breed: fields.breed
        });
    });
};

function editItem(req) {
    const id = getParams(req, 'id');
    const index = cats.indexOf(getItem(id));

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
};

function searchItem(req) {
    const query = getParams(req, 'query');
    const result = [];
    cats.forEach(cat => {
        for (let el in cat) {
            if (cat[el] == query) {
                result.push(cat);
            }
        }
    });
    return result;
}

module.exports = {
    getParams,
    getItem,
    deteleItem,
    createItem,
    editItem,
    searchItem,
    addBreed
}