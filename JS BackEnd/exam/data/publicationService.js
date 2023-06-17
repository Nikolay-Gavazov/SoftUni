const Publication = require('../models/Publication');

async function getAll(query) {
    const options = {};
    if (query.type) {
        options.type = new RegExp(query.type, 'i');
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
    const data = await Publication.find(options).lean().populate('shares');
    
    if (data) {
        return data;
    }
    return null;
};

async function getById(id) {
    const data = await Publication.findById(id).lean().populate('shares');
    
if(data) {
    return data;
} else {
        return undefined;
    }
};

async function createItem(data) {
    return await Publication.create(data);
};

async function deleteItem(id) {
    await Publication.findByIdAndDelete(id);
};

async function editItem(id, data) {
    await Publication.findByIdAndUpdate(id, data);
}

async function share(id, userId) {
    const data = await Publication.findById(id);
    data.shares.push(userId)
    await data.save();
};

async function getShare(id, userId) {
    const data = await Publication.findById(id).lean();
    if (data && data.shares.length > 0) {
        return data.shares.some(el => el._id.toString() == userId?.toString());
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
        getShare,
        share
    }
    next()
};