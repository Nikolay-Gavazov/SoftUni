const Ad = require('../models/Ad');

async function getAll(query) {
    const options = {};
    if (query.name) {
        options.name = {email: new RegExp(query.name, 'i')};
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
    const data = await Ad.find(options).lean().populate('author');
    if (data) {
        return data;
    }
    return null;
};

async function getById(id) {
    const data = await Ad.findById(id).lean().populate('author');
    const data2 = await Ad.findById(id).lean().populate('applied');

    data['applied'] = data2.applied;
if(data) {
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

async function apply(id, userId) {
    const ad = await Ad.findById(id);
    ad.applied.push(userId)
    await ad.save();
};

async function getApply(id, userId) {
    const ad = await Ad.findById(id).lean();
    if (ad && ad.applied.length > 0) {
        return ad.applied.some(el => el._id.toString() == userId?.toString());
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
        apply,
        getApply
    }
    next()
};