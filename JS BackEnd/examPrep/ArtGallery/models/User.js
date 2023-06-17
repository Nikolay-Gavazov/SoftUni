const { Schema, model, default: mongoose } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true
    },
    myPublications: [{
        type: mongoose.Types.ObjectId,
        ref: 'Publication'
    }],
    shares: [{
        type: mongoose.Types.ObjectId,
        ref: 'Publication'
    }],

});

const User = model('User', userSchema);

module.exports = User;