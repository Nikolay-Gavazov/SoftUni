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


module.exports = () => (req, res, next) => {
    req.storage = {
        getAll
    };
    next();
}