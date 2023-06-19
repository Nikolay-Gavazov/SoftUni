const Animal = require('../models/Animal');

async function getAll(query) {
    const options = {};
    if (query.location) {
        options.location = new RegExp(query.location, 'i');
    }
    if (query.platform) {
        if (!options.platform) {
            options.platform = {};
        }
        options.platform = new RegExp(query.platform, 'i');
    }
    if (query.isOpen) {
        options.isOpen = true;
    }
    const data = await Animal.find(options).lean().populate('donations').populate('owner');
    
    if (data) {
        return data;
    }
    return null;
};

async function getById(id) {
    const data = await Animal.findById(id).lean().populate('donations').populate('owner');
    
if(data) {
    return data;
} else {
        return undefined;
    }
};

async function createItem(data) {
    return await Animal.create(data);
};

async function deleteItem(id) {
    await Animal.findByIdAndDelete(id);
};

async function editItem(id, data) {
    await Animal.findByIdAndUpdate(id, data);
}

async function donate(id, userId) {
    const data = await Animal.findById(id);
    data.donations.push(userId)
    await data.save();
};

async function getDonations(id, userId) {
    const data = await Animal.findById(id).lean();
    if (data && data.donations.length > 0) {
        return data.donations.some(el => el._id.toString() == userId?.toString());
    };
    return undefined;
};


module.exports = () => (req, res, next) => {
    req.storage = {
        getAll,
        getById,
        createItem,
        deleteItem,
        editItem,
        donate,
        getDonations
    }
    next()
};