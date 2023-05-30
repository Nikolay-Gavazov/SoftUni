const {Schema, model} = require('mongoose');

const accessorySchema = new Schema({
    name: {type: String, required: true},
    description: {type: String},
    imageUrl: {type: String},
});

const Accessory = model('accessory', accessorySchema);

module.exports = Accessory;