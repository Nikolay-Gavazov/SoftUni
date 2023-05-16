const fs = require('fs/promises');

async function getCats() {
    const data = JSON.parse((await fs.readFile('./data/cats.json')).toString());

    return Object
    .entries(data)
    .map(([_id, item]) => Object.assign({}, item, {_id}));
}

async function getBreeds() {
    const data = JSON.parse((await fs.readFile('./data/breeds.json')).toString());

    return Object
    .entries(data)
    .map(([_id, item]) => Object.assign({}, item, {_id}));
}

module.exports = {
    getCats,
    getBreeds
}
