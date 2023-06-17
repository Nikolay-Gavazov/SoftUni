const Hotel = require('../models/Hotel');

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
    const data = await Hotel.find(options).lean().populate('bookedRooms');
    
    if (data) {
        return data;
    }
    return null;
};

async function getById(id) {
    const data = await Hotel.findById(id).lean().populate('bookedRooms').populate('owner');
    
if(data) {
    return data;
} else {
        return undefined;
    }
};

async function createItem(data) {
    const hotel = await Hotel.find({ name: data.name });
    if (hotel.length > 0) {
        return undefined;
    }
    return await Hotel.create(data);
};

async function deleteItem(id) {
    await Hotel.findByIdAndDelete(id);
};

async function editItem(id, data) {
    await Hotel.findByIdAndUpdate(id, data);
}

async function book(id, userId) {
    const data = await Hotel.findById(id);
    data.bookedRooms.push(userId);
    data.freeRooms--;
    await data.save();
};

async function getBook(id, userId) {
    const data = await Hotel.findById(id).lean();
    if (data && data.bookedRooms.length > 0) {
        return data.bookedRooms.some(el => el._id.toString() == userId?.toString());
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
        getBook,
        book
    }
    next()
};