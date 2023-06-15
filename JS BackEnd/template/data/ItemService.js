const Item = require('../models/Item');

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
    if(query.isOpen){
        options.isOpen = true;
    }
    
    const photos = await Item.find(options).lean();
    if(photos){
        return photos;
    }
    return null;
};

async function getById(id) {
    const data = await Item.findById(id).lean()
    // const data = await Item.findById(id).lean().populate('ownerId');
    // const data2 = await Item.findById(id).lean().populate('votes');
    // data['votes'] = data2.votes;

    if (data) {
        return data;
    } else {
        return undefined;
    }
};

async function createItem(data) {
    return await Item.create(data);
};

async function deleteItem(id) {
    await Item.findByIdAndDelete(id);
};

async function editItem(id, data) {
    await Item.findByIdAndUpdate(id, data);
}

async function join(id, userId) {
    const data = await Item.findById(id);
    data.buddies.push(userId);
    data.seats--;
    await data.save();
}

// async function voteDown(postId, userId) {
//     const data = await Item.findById(postId);
//     data.votes.push(userId);
//     data.rating--
//     await data.save();
// }

// async function bid(id, user, amount) {
//     const data = await Item.findById(id);
//     data.winner = `${user.firstName} ${user.lastName}`
//     data.bidder[0] = user._id;
//     data.price = Number(amount);
//     await data.save();
// }

// async function close(id) {
//     const data = await Item.findById(id);
//     data.isOpen = false;
//     await data.save();
// }

// async function getJoinedUser(id, userId){
//     const data = await Item.findById(id).lean();
//     if(data && data.buddies.length > 0){
//         return data.buddies.some(el => el._id.toString() == userId?.toString());
//     };

//     return undefined;
// }


module.exports = () => (req, res, next) => {
    req.storage = {
        getAll,
        getById,
        createItem,
        deleteItem,
        editItem,
        join,
        // getJoinedUser,
        // voteDown
    };
    next();
}