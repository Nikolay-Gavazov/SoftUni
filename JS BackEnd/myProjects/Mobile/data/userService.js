const User = require('../models/User');
const jwt = require('../jwt-to-promise');
const secret = 'samoLevski';

async function createUserData(data){
    const user = await User.find({username: data.username});
    if(user.length > 0){
        return undefined;
    }
   return await User.create(data);
};

async function getUser(username){
    const data = await User.findOne({username: username});
    return data;
};

async function getById(id){
    const user = await User.findById(id);
    if(user){
        return user;
    }else{
        return undefined;
    }
};

async function checkUser(req){
    const token = req.cookies.token;
    let user = null;
    if(token) {
        const payload = await jwt.verify(token, secret);
        user = payload.username;
    }
    return user;
};

module.exports = () => (req, res, next) => {
    req.user = {
        getById,
        checkUser,
        getUser,
        createUserData
    }
    next();
}