const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('../jwt-to-promise');

exports.register = async (data) => {
    const user = await User.create(data);

    const result = authResult(user);

    return result;

};

exports.login = async ({ email, password }) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error('Invalid credentials');
    }
    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        throw new Error('Invalid credentials');
    }
    const result = authResult(user);

    return result;
};

async function authResult(user) {
    const payload = {
        _id: user._id,
        email: user.email
    }
    const token = await jwt.sign(payload, 'DedovDedov', { expiresIn: '1d' });

    const result = {
        _id: user._id,
        email: user.email,
        accessToken: token
    }

    return result;
}