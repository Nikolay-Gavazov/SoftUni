const {Schema, model, default: mongoose} = require('mongoose');

const carSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String},
    imageUrl: {type: String},
    price: {type: Number},
    options: [{
        type: mongoose.Types.ObjectId,
        ref: 'Option'
    }],
    ownerId: {type: String}
});

const Car = model('Car', carSchema);

module.exports = Car;