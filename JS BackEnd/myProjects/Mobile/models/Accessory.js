const {Schema, model} = require('mongoose');

const accessorySchema = new Schema({
    name: {type: String, required: true},
    description: {type: String},
    imageUrl: {type: String},
    price: {type: Number}
});

const Car = model('Car', carSchema);

module.exports = Car;