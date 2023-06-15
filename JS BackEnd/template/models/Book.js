const { Schema, model, default: mongoose } = require('mongoose');

const bookSchema = new Schema({
    
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    review: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    stars: {
        type: Number,
        required: true
    },
    owner: {user: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    email: {type:String}
    },
}
    
);

const Book = model('Book', bookSchema);

module.exports = Book;