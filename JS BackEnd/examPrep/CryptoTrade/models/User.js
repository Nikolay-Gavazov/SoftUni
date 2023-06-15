const { Schema, model, default: mongoose } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    wishingList: [{
            type: mongoose.Types.ObjectId,
            ref: 'Book'}],
});

const User = model('User', userSchema);

module.exports = User;