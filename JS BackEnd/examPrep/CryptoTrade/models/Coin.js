const { Schema, model, default: mongoose } = require('mongoose');

const coinSchema = new Schema({
    
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    payment: {
        type: String,
        required: true
    },
    buyers: [{
        user: {
            type: mongoose.Types.ObjectId,
            ref: 'User'
        }
    }],
    owner: {user: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    email: {type:String}
    }
}
    
);

const Coin = model('Coin', coinSchema);

module.exports = Coin;