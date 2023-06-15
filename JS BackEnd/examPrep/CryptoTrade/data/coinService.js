const Coin = require('../models/Coin');

async function getAll(query) {
    const options = {};

    if (query.name) {
        options.name = new RegExp(query.name, 'i');
    }
    if (query.payment) {
        if (!options.payment) {
            options.payment = {};
        }
        options.payment = new RegExp(query.payment, 'i');
    }
    
    const photos = await Coin.find(options).lean();
    if(photos){
        return photos;
    }
    return null;
};

async function getById(id) {
    const data = await Coin.findById(id).lean()
    // const data = await Trip.findById(id).lean().populate('ownerId');
    // const data2 = await Trip.findById(id).lean().populate('votes');
    // data['votes'] = data2.votes;

    if (data) {
        return data;
    } else {
        return undefined;
    }
};

async function createItem(data) {
    return await Coin.create(data);
};

async function deleteItem(id) {
    await Coin.findByIdAndDelete(id);
};

async function editItem(id, data) {
    await Coin.findByIdAndUpdate(id, data);
}

async function buy(id, userId) {
    const coin = await Coin.findById(id);
    coin.buyers.push(userId);
    await coin.save();
}

// async function voteDown(postId, userId) {
//     const post = await Post.findById(postId);
//     post.votes.push(userId);
//     post.rating--
//     await post.save();
// }

async function getBuyers(id, userId){
    const coin = await Coin.findById(id).lean();
    if(coin && coin.buyers.length > 0){
        return coin.buyers.some(el => el._id.toString() == userId?.toString());
    };
    return undefined;
}


module.exports = () => (req, res, next) => {
    req.storage = {
        getAll,
        getById,
        createItem,
        deleteItem,
        editItem,
        buy,
        getBuyers,
        // voteDown
    };
    next();
}