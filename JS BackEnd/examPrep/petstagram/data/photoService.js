const Photo = require('../models/Photo');

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
    
    const photos = await Photo.find(options).lean();
    if(photos){
        return photos;
    }
    return null;
};

async function getById(id) {
    const data = await Photo.findById(id).lean().populate('ownerId');
    const data2 = await Photo.findById(id).lean().populate('commentList');
    data['commentList'] = data2.commentList;

    if (data) {
        return data;
    } else {
        return undefined;
    }
};

async function createItem(data) {
    await Photo.create(data);
};

async function deleteItem(id) {
    await Photo.findByIdAndDelete(id);
};

async function editItem(id, data) {
    await Photo.findByIdAndUpdate(id, data);
}

async function comment(photoId, userId, comment) {
    const photo = await Photo.findById(photoId);
    photo.commentList.push({userId, comment});
    await photo.save();
}

// function dataParcer(data) {
//     return {
//         name: data.name,
//         description: data.description,
//         imageUrl: data.imageUrl,
//         difficultyLevel: Number(data.difficultyLevel)
//     }
// }

module.exports = () => (req, res, next) => {
    req.photo = {
        getAll,
        getById,
        createItem,
        deleteItem,
        editItem,
        comment
    };
    next();
}