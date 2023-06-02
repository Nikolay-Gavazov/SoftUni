const { Schema, model, default: mongoose } = require('mongoose');

const cubeSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    imageUrl: { type: String },
    difficultyLevel: { type: Number },
    accessories: [{
        type: mongoose.Types.ObjectId,
        ref: 'Accessory'
    }],
    ownerId: {type: String}
});

const Cube = model('Cube', cubeSchema);

module.exports = Cube;