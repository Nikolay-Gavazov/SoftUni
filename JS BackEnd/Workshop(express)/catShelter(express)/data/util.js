const Breed = require('../models/Breed');
const Cat = require('../models/Cat');

async function getItem(id) {
    const data = await Cat.findById(id).lean();
    if (data) {
        return data;
    } else {
        return undefined;
    }
}

async function getBreeds() {
    const data = await Breed.find({}).lean();
    return data;
}

async function searchItem(query) {
    const options = {};
    if (query.search) {
        options.name = new RegExp(query.search, 'i');
    }

    const cats = await Cat.find(options).lean();
    return cats;
}

async function createData(data, location) {
    if (location == 'Cat') {
        await Cat.create(data);
    } else if (location == 'Breed') {
        Breed.create(data);
    }
}

async function editData(data, id) {
    await Cat.findByIdAndUpdate(id, data);
}

async function deleteData(id) {
    await Cat.findByIdAndDelete(id);
}

module.exports = () => (req, res, next) => {
    req.storage = {
        getBreeds,
        createData,
        getItem,
        editData,
        deleteData,
        searchItem
    };
    next();
}
