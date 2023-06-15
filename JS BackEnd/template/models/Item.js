const { Schema, model, default: mongoose } = require('mongoose');

const itemSchema = new Schema({
    
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
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
    author: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    ,
    }],
    bidder: [
            {
            type: mongoose.Types.ObjectId,
            ref: 'User'
        },
        ],
    isOpen: {type: Boolean},
    winner: {type:String}

}
    
);

const Item = model('Item', itemSchema);

module.exports = Item;