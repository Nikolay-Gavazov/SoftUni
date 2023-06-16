const { Schema, model, default: mongoose } = require('mongoose');

const homeSchema = new Schema({
    
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    availablePieces: {
        type: Number,
        required: true
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    ,
    },
    rented: [{
            type: mongoose.Types.ObjectId,
            ref: 'User'
        }],
}
    
);

const Home = model('Home', homeSchema);

module.exports = Home;