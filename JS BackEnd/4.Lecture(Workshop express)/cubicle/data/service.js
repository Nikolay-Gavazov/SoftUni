const Cube = require('../models/Cube');

async function getAll(query){
    const options = {};

    if(query.search){
        options.name = new RegExp(query.search, 'i');
    }
    if(query.from){
        options.difficultyLevel = {$gte: Number(query.from)};
    }
    if(query.to){
        if(!options.difficultyLevel){
            options.difficultyLevel = {};
        }
        options.difficultyLevel.$lte = Number(query.from);
    }
    const cubes = await Cube.find(options);
    return cubes
}

async function getById(id){
    const data = await Cube.findById(id);

    if(data){
        return data;
    }else{
        return undefined;
    }
}

async function createItem(data){
    const cube = {
        name: data.name,
        description: data.description,
        imageUrl: data.imageUrl,
        difficultyLevel: Number(data.difficultyLevel)
    };
    await Cube.create(cube);
}

module.exports = () => (req, res, next) => {
    req.storage = {
        getAll,
        getById,
        createItem
    };
    next();
}