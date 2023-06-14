const { Schema, model, default: mongoose } = require('mongoose');

const userSchema = new Schema({
    gender: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true,
        minLength: 4
    },
    email: {
        type: String,
        required: true,
        minLength: 10
    },
    tripsHistory: [{
        type: mongoose.Types.ObjectId,
        ref: 'Trip'
    }]
});

const User = model('User', userSchema);

module.exports = User;