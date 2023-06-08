const { Schema, model, default: mongoose } = require('mongoose');

const gameSchema = new Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: {type: Number, required: true },
    description: { type: String, required: true },
    genre: { type: String, required: true },
    platform: {type: String, required: true },
    bougthBy: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }],
    ownerId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});

const Game = model('Game', gameSchema);

module.exports = Game;