const Post = require('../models/Post');

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
    
    const photos = await Post.find(options).lean();
    if(photos){
        return photos;
    }
    return null;
};

async function getById(id) {
    const data = await Post.findById(id).lean().populate('author');
    // const data = await Photo.findById(id).lean().populate('ownerId');
    const data2 = await Post.findById(id).lean().populate('votes');
    data['votes'] = data2.votes;

    if (data) {
        return data;
    } else {
        return undefined;
    }
};

async function createItem(data) {
    return await Post.create(data);
};

async function deleteItem(id) {
    await Post.findByIdAndDelete(id);
};

async function editItem(id, data) {
    await Post.findByIdAndUpdate(id, data);
}

async function voteUp(postId, userId) {
    const post = await Post.findById(postId);
    post.votes.push(userId);
    post.rating++;
    await post.save();
}

async function voteDown(postId, userId) {
    const post = await Post.findById(postId);
    post.votes.push(userId);
    post.rating--
    await post.save();
}

async function getUserVote(id, userId){
    const post = await Post.findById(id).lean();
    if(post.votes.length > 0){
        return post.votes.some(el => el._id.toString() == userId.toString());
    };

    return undefined;
}


module.exports = () => (req, res, next) => {
    req.post = {
        getAll,
        getById,
        createItem,
        deleteItem,
        editItem,
        voteUp,
        getUserVote,
        voteDown
    };
    next();
}