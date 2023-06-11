const { Schema, model, default: mongoose } = require('mongoose');

const photoSchema = new Schema({
    name: { type: String, required: true },
    age: {type: Number, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    image: { type: String, required: true },
    commentList: [{
        userId: {type: String},
        comment: {type: String}
    }],
    ownerId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});

const Photo = model('Photo', photoSchema);

module.exports = Photo;