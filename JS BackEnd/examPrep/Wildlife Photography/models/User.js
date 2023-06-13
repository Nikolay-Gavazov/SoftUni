const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: { type: String,
                required: true,
                minLength: 3 },
    password: { type: String,
                required: true,
                minLength: 4},
    email: {type: String,
            required: true,
            minLength: 10}
});

const User = model('User', userSchema);

module.exports = User;