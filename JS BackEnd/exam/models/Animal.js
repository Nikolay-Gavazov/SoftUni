const { Schema, model, default: mongoose } = require('mongoose');

const animalSchema = new Schema({
    
    name: {
        type: String,
        required: true,
        unique: true
    },
    years: {
        type: Number,
        required: true
    },
    kind: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    needOf: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    ,
    },
    donations: [{
            type: mongoose.Types.ObjectId,
            ref: 'User',
            unique: true
        }],
}
    
);

const Animal = model('Animal', animalSchema);

module.exports = Animal;