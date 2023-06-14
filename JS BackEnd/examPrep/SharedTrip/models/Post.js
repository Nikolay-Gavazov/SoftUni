const { Schema, model, default: mongoose } = require('mongoose');

const postSchema = new Schema({
    
    title: {
        type: String,
        required: true
    },
    keyword: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    author: {user: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
        fullname: {type: String}
    },
    votes: [{
        user: {
            type: mongoose.Types.ObjectId,
            ref: 'User'
        }
    }],
    rating: {type: Number}
}
    
);

const Post = model('Post', postSchema);

module.exports = Post;