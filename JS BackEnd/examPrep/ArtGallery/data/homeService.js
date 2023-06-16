const Home = require('../models/Home');

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
    const data = await Home.find(options).lean();
    if (data) {
        return data;
    }
    return null;
};

async function getById(id) {
    const data = await Home.findById(id).lean().populate('owner');
    const data2 = await Home.findById(id).lean().populate('rented');

    data['rented'] = data2.rented;
if(data) {
    return data;
} else {
        return undefined;
    }
};

async function createItem(data) {
    return await Home.create(data);
};

async function deleteItem(id) {
    await Home.findByIdAndDelete(id);
};

async function editItem(id, data) {
    await Home.findByIdAndUpdate(id, data);
}

async function rent(id, userId) {
    const home = await Home.findById(id);
    home.rented.push(userId)
    home.availablePieces--;
    await home.save();
};

async function getApply(id, userId) {
    const home = await Home.findById(id).lean();
    if (home && home.rented.length > 0) {
        return home.rented.some(el => el._id.toString() == userId?.toString());
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
        rent,
        getApply
    }
    next()
};