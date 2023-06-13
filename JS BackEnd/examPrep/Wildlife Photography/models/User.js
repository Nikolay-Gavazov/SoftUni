const { Schema, model, default: mongoose } = require('mongoose');

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },

    lastName: {
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
    myPosts: [{
        type: mongoose.Types.ObjectId,
        ref: 'Post'
    }]
});

const User = model('User', userSchema);

module.exports = User;