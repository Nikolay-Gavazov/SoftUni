const Accessory = require('../models/Accessory');

async function getAll() {
    const data = await Accessory.find({});
    return data;
};

async function getRest(ids) {
    const data = await Accessory.find({ _id: { $nin: ids } });

    if (data) {
        return data;
    } else {
        return undefined;
    }
};

async function createItem(data) {
    const accessory = dataParcer(data);
    await Accessory.create(accessory);
};


function dataParcer(data) {
    return {
        name: data.name,
        description: data.description,
        imageUrl: data.imageUrl,
    }
}

module.exports = () => (req, res, next) => {
    req.accessory = {
        getAll,
        getRest,
        createItem,
    };
    next();
}