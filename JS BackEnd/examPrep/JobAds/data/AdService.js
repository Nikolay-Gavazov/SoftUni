const Ad = require('../models/Ad');

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
    
    const data = await Ad.find(options).lean();
    if(data){
        return data;
    }
    return null;
};

async function getById(id) {
    const data = await Ad.findById(id).lean();
    // const data = await Trip.findById(id).lean().populate('ownerId');
    // const data2 = await Item.findById(id).lean().populate('author');
    // data['author'] = data2.author;

    if (data) {
        return data;
    } else {
        return undefined;
    }
};

async function createItem(data) {
    return await Ad.create(data);
};

async function deleteItem(id) {
    await Ad.findByIdAndDelete(id);
};

async function editItem(id, data) {
    await Ad.findByIdAndUpdate(id, data);
}

// async function bid(id, user, amount) {
//     const item = await Item.findById(id);
//     item.winner = `${user.firstName} ${user.lastName}`
//     item.bidder[0] = user._id;
//     item.price = Number(amount);
//     await item.save();
// }

// async function close(id) {
//     const item = await Item.findById(id);
//     item.isOpen = false;
//     await item.save();
// }

// async function getBidder(id, userId){
//     const item = await Item.findById(id).lean();
//     if(item && item.bidder.length > 0){
//         return item.bidder.some(el => el._id.toString() == userId?.toString());
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
        // bid,
        // getBidder,
        // close
    };
    next();
}