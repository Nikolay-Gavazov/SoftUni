const {Schema, model} = require('mongoose');

const optionSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String},
    imageUrl: {type: String}
});

const Option = model('Option', optionSchema);

module.exports = Option;