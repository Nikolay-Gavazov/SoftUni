const Breed = require('../models/Breed');
const Cat = require('../models/Cat');


async function getItem(_id, location) {
    let data = null;
    if (location == 'Cat') {
        data = await Cat.findById(_id).lean();
    } else if (location == 'Breed') {
        data = await Breed.findById(_id).lean();
    }

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
    const cats = await Cat.find({}).lean();
    const result = [];
    console.log(cats);
    if (query.search) {
        cats.forEach(cat => {
            for (let el in cat) {
                if (cat[el].toLocaleLowerCase().includes(query.search.toLocaleLowerCase())) {
                    result.push(cat);
                }
            }
        });
        return cats;
    } else {
        return cats;
    }

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
