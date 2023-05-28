const {Schema, model} = require('mongoose');

const breedSchema = new Schema({
    breed: {type: String,
    minLength: 3}
});

const Breed = model('Breed',breedSchema);

module.exports = Breed;