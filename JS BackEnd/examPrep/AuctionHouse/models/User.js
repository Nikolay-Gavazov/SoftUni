const { Schema, model, default: mongoose } = require('mongoose');

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    auctions: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Item'
        }

    ]
});

const User = model('User', userSchema);

module.exports = User;