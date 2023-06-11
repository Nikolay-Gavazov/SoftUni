const Game = require('../models/Game');

async function getAll(query) {
    const options = {};

    if (query.name) {
        options.name = new RegExp(query.name, 'i');
    }
    if (query.platform) {
        if (!options.platform) {
            options.platform = {};
        }
        options.platform = new RegExp(query.platform, 'i');
    }
    
    const games = await Game.find(options).lean();
    if(games){
        return games;
    }
    return null;
};

async function getById(id) {
    const data = await Game.findById(id).lean().populate('bougthBy');

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

async function buyGame(gameId, userId) {
    const game = await Game.findById(gameId);
    game.bougthBy.push(userId);
    await game.save();
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
    req.game = {
        getAll,
        getById,
        createItem,
        deleteItem,
        editItem,
        buyGame
    };
    next();
}