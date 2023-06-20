const mongoose = require('mongoose');

const furnitureSchema = new mongoose.Schema({
    make: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    material: {
        type: String,
    },
    _ownerId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});

const Furniture = mongoose.model('Furniture', furnitureSchema);

module.exports = Furniture;