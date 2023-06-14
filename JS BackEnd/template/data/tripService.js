const Trip = require('../models/Trip');

async function getAll(query) {
    const options = {};

    if (query.name) {
        options.name = new RegExp(query.name, 'i');
    }
    if (query.platform) {
        if (!options.platform) {
            options.platform = {};
        }
        options.platform = new RegExp(query.platform, 'i');
    }
    
    const photos = await Trip.find(options).lean();
    if(photos){
        return photos;
    }
    return null;
};

async function getById(id) {
    const data = await Trip.findById(id).lean()
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
    return await Trip.create(data);
};

async function deleteItem(id) {
    await Trip.findByIdAndDelete(id);
};

async function editItem(id, data) {
    await Trip.findByIdAndUpdate(id, data);
}

async function join(id, userId) {
    const trip = await Trip.findById(id);
    trip.buddies.push(userId);
    trip.seats--;
    await trip.save();
}

// async function voteDown(postId, userId) {
//     const post = await Post.findById(postId);
//     post.votes.push(userId);
//     post.rating--
//     await post.save();
// }

async function getJoinedUser(id, userId){
    const trip = await Trip.findById(id).lean();
    if(trip && trip.buddies.length > 0){
        return trip.buddies.some(el => el._id.toString() == userId?.toString());
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
        join,
        getJoinedUser,
        // voteDown
    };
    next();
}