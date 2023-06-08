const Game = require('../models/Game');

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
    const games = await Game.find(options);
    if(games){
        return games;
    }
    return null;
};

async function getById(id) {
    const data = await Game.findById(id).populate('accessories');

    if (data) {
        return data;
    } else {
        return undefined;
    }
};

async function createItem(data) {
    await Game.create(data);
};

async function deleteItem(id) {
    await Game.findByIdAndDelete(id);
};

async function editItem(id, data) {
    await Game.findByIdAndUpdate(id, data);
}

// function dataParcer(data) {
//     return {
//         name: data.name,
//         description: data.description,
//         imageUrl: data.imageUrl,
//         difficultyLevel: Number(data.difficultyLevel)
//     }
// }

module.exports = () => (req, res, next) => {
    req.games = {
        getAll,
        getById,
        createItem,
        deleteItem,
        editItem,
    };
    next();
}