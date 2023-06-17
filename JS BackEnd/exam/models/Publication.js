const { Schema, model, default: mongoose } = require('mongoose');

const publicationSchema = new Schema({
    
    title: {
        type: String,
        required: true
    },
    paintingTech: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    certificate: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    ,
    },
    shares: [{
            type: mongoose.Types.ObjectId,
            ref: 'User'
        }],
}
    
);

const Publication = model('Publication', publicationSchema);

module.exports = Publication;