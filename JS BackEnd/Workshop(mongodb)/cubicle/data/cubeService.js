const Cube = require('../models/Cube');

async function getAll(query) {
    const options = {};

    if (query.search) {
        options.name = new RegExp(query.search, 'i');
    }
    if (query.from) {
        options.difficultyLevel = { $gte: Number(query.from) };
    }
    if (query.to) {
        if (!options.difficultyLevel) {
            options.difficultyLevel = {};
        }
        options.difficultyLevel.$lte = Number(query.to);
    }
    const cubes = await Cube.find(options);
    return cubes
};

async function getById(id) {
    const data = await Cube.findById(id).populate('accessories');

    if (data) {
        return data;
    } else {
        return undefined;
    }
};

async function createItem(data) {
    const cube = dataParcer(data);
    await Cube.create(cube);
};

async function deleteItem(id) {
    await Cube.findByIdAndDelete(id);
};

async function editItem(id, data) {
    const cube = dataParcer(data);
    await Cube.findByIdAndUpdate(id, cube);
}

async function attachAccessory(cubeId, accessoryId) {
    const cube = await Cube.findById(cubeId);
    cube.accessories.push(accessoryId);
    await cube.save();
}

function dataParcer(data) {
    return {
        name: data.name,
        description: data.description,
        imageUrl: data.imageUrl,
        difficultyLevel: Number(data.difficultyLevel)
    }
}

module.exports = () => (req, res, next) => {
    req.cube = {
        getAll,
        getById,
        createItem,
        deleteItem,
        editItem,
        attachAccessory
    };
    next();
}