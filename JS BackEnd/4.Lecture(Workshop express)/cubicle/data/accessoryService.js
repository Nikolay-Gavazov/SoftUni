const Accessory = require('../models/Accessory');

async function getAll(){
    const data = await Accessory.find({});
    return data
};

async function getById(id){
    const data = await Accessory.findById(id);

    if(data){
        return data;
    }else{
        return undefined;
    }
};

async function createItem(data){
    const accessory = dataParcer(data);
    await Accessory.create(cube);
};

async function deleteItem(id){
    await Accessory.findByIdAndDelete(id);
};

async function editItem(id, data){
    const accessory = dataParcer(data);
    await Accessory.findByIdAndUpdate(id, cube);
}

function dataParcer(data){
    return {
        name: data.name,
        description: data.description,
        imageUrl: data.imageUrl,
    }
}

module.exports = () => (req, res, next) => {
    req.storage = {
        getAll,
        getById,
        createItem,
        deleteItem,
        editItem
    };
    next();
}