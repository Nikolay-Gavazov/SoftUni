const { Schema, model, default: mongoose } = require('mongoose');

const hotelSchema = new Schema({
    
    name: {
        type: String,
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
    freeRooms: {
        type: Number,
        required: true
    },
    bookedRooms: [{
            type: mongoose.Types.ObjectId,
            ref: 'User'
        }],
    owner: {
            type: mongoose.Types.ObjectId,
            ref: 'User'
        ,
        },
}
    
);

const Hotel = model('Hotel', hotelSchema);

module.exports = Hotel;