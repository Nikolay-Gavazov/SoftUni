const { Schema, model, default: mongoose } = require('mongoose');

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    bookedHotels: [{
        type: mongoose.Types.ObjectId,
        ref: 'Hotel'
    }],
    offeredHotels: [{
        type: mongoose.Types.ObjectId,
        ref: 'Hotel'
    }],

});

const User = model('User', userSchema);

module.exports = User;