const Breed = require('../models/Breed');
const Cat = require('../models/Cat');


async function getItem(_id, location){
    let data = null;
    if(location == 'Cat'){
        data = await Cat.findById(_id).lean();
    }else if(location == 'Breed'){
        data = await Breed.findById(_id).lean();
    }
    
    if(data){
        return data;
    }else{
        return undefined;
    }
}

async function getAll(location) {
    let data = null;
    if(location == 'Cat'){
        data = await Cat.find({}).lean();
    }else if(location == 'Breed'){
        data = await Breed.find({}).lean();
    }
    console.log(data);
    return data;
}

async function searchItem(query) {
    const cats = await Cat.find({}).lean();
    const result = [];
    
    if(query.search){
    cats.forEach(cat => {
        for (let el in cat) {
            if (cat[el].toLocaleLowerCase().includes(query.search.toLocaleLowerCase())) {
                result.push(cat);
            }
        }
    });
    return result;
    }else{
        return cats;
    }
    
}


async function createData(data, location){
    const dataBase = await readFile(location);
    const _id = nextId();
    dataBase[_id] = data;

    await write(location, dataBase);
}

async function editData(data, _id, location){
    const dataBase = await readFile(location);

    dataBase[_id] = data;

    await write(location, dataBase);
}

async function deleteData(_id, location){
    const dataBase = await readFile(location);

    delete dataBase[_id];

    await write(location, dataBase);
}

function nextId() {
    return 'xxxxxxxx'.replace(/x/g, () => (Math.random() * 16 | 0).toString(16));
};

module.exports = () => (req, res, next) => {
    req.storage = {
        getAll,
        createData,
        getItem,
        editData,
        deleteData,
        searchItem
    };
    next();
}
