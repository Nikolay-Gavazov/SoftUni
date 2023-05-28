const {Schema, model} = require('mongoose');

const catSchema = new Schema({
    name: {type: String,
    minLength: 3},
    description: {type: String},
    img: {type: String},
    breed: {type: String}
});

const Cat = model('Cat',catSchema);

module.exports = Cat;