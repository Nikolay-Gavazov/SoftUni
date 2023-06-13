const mongoose = require('mongoose');

const connectionStr = 'mongodb://127.0.0.1:27017/Petstagram';

const Photo = require('../models/Photo');
const User = require('../models/User');

async function init() {
    try {
        await mongoose.connect(connectionStr, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('DB connected');

        mongoose.connection.on('error', (err) => {
            console.error('DB error');
            console.error(err);
        })
    } catch (error) {
        console.error('DB error');
        process.exit(1);
    }
}

module.exports = init;