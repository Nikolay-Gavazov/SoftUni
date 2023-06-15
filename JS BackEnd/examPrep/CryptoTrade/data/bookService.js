const Book = require('../models/Book');

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
    
    const photos = await Book.find(options).lean();
    if(photos){
        return photos;
    }
    return null;
};

async function getById(id) {
    const data = await Book.findById(id).lean()
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
    return await Book.create(data);
};

async function deleteItem(id) {
    await Book.findByIdAndDelete(id);
};

async function editItem(id, data) {
    await Book.findByIdAndUpdate(id, data);
}

// async function wish(id, userId) {
//     const book = await Book.findById(id);
//     book.wishingList.push(userId);
//     await book.save();
// }

// async function voteDown(postId, userId) {
//     const post = await Post.findById(postId);
//     post.votes.push(userId);
//     post.rating--
//     await post.save();
// }

// async function getWishes(id, userId){
//     const book = await Book.findById(id).lean();
//     if(book && book.wishingList.length > 0){
//         return book.wishingList.some(el => el._id.toString() == userId?.toString());
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
        // wish,
        // getWishes,
        // voteDown
    };
    next();
}