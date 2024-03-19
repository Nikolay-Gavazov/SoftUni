const User = require("../models/User");
const jwt = require('../jwt-to-promise');
const secret = 'lapamChushki';

async function getById(id) {
    const user = await User.findById(id).lean()
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
    const data = await User.findOne({ email: email }).lean()
    return data;
}

async function createData(data) {
    const user = await User.find({ email: data.email });
    if (user.length > 0) {
        return undefined;
    }
    return await User.create(data);
};

async function editUser(id, data) {
    await User.findByIdAndUpdate(id, data);
}

module.exports = () => (req, res, next) => {
    req.userStorage = {
        getById,
        getUser,
        createData,
        checkUser,
        editUser,
    };
    next();
}