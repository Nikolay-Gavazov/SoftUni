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

// async function addAd(id, adId) {
//     const user = await User.findById(id);
//     user.myPublications.push(adId);
//     await user.save();
// }

// async function share(id, publicationId) {
//     const data = await User.findById(id);
//     data.shares.push(publicationId)
//     await data.save();
// };

// async function getWishes(id, bookId){
//     const user = await User.findById(id).lean();
//     if(user && user.wishingList.length > 0){
//         return user.wishingList.some(el => el._id.toString() == bookId?.toString());
//     };
//     return undefined;
// }

// async function addTrip(id, tripId){
//     const user = await User.findById(id);
//     user.tripsHistory.push(tripId);
//     await user.save();
// }

module.exports = () => (req, res, next) => {
    req.userStorage = {
        getById,
        getUser,
        createData,
        checkUser,
        editUser,
        // addAd,
        // share
    };
    next();
}