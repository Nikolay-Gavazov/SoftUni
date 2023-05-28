const {Schema, model} = require('mongoose');

const catSchema = new Schema({
    name: {type: String,
    minLength: 3},
    description: {type: String,
    minLength: 10},
    img: {type: String},
    breed: {type: String}
});

const Cat = model('Cat',catSchema);

model.exports = Cat;