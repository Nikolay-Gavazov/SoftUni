const Breed = require('../models/Breed');
const Cat = require('../models/Cat');

async function getItem(_id) {
    const data = await Cat.findById(_id).lean();
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
        // options.description = new RegExp(query.search, 'i');
        // options.breed = new RegExp(query.search, 'i');
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

async function editData(data, _id) {
    await Cat.findByIdAndUpdate(_id, data);
}

async function deleteData(_id) {
    await Cat.findByIdAndDelete(_id);
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
