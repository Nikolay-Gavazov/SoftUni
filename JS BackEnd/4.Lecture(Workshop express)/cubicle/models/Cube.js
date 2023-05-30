const {Schema, model} = require('mongoose');

const cubeSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String},
    imageUrl: {type: String},
    difficultyLevel: {type: Number}
});

const Cube = model('Cube', cubeSchema);

module.exports = Cube;