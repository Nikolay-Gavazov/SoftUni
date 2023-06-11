const User = require("../models/User");
const jwt = require('../jwt-to-promise');
const secret = 'lapamChushki';

async function getById(id) {
    const user = await User.findById(id);
    return user;
};

async function checkUser(req) {
    const token = req.cookies.token;
    let user = null;
    if (token) {
        const payload = await jwt.verify(token, secret);
        user = payload.email;
    }
    return user;
}

async function getUser(email) {
    const data = await User.findOne({ email: email });
    return data;
}

async function createData(data) {
    const user = await User.find({ username: data.username });
    if (user.length > 0) {
        return new Error('This username is taken');
    }
    await User.create(data);
};


module.exports = () => (req, res, next) => {
    req.storage = {
        getById,
        getUser,
        createData,
        checkUser
    };
    next();
}