const { Schema, model, default: mongoose } = require('mongoose');

const AdSchema = new Schema({
    
    headline: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    companyName: {
        type: String,
        required: true
    },
    companyDescription: {
        type: String,
        required: true
    },
    author: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    ,
    }],
    applied: [{
            type: mongoose.Types.ObjectId,
            ref: 'User'
        }],
}
    
);

const Ad = model('Ad', AdSchema);

module.exports = Ad;