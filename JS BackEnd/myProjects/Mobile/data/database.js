const mongoose = require('mongoose');

const connectionStr = 'mongodb://127.0.0.1:27017/mobile';

require('../models/Car');
require('../models/Accessory');
require('../models/User');


async function init(){
    try {
        await mongoose.connect(connectionStr, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('DB connected');

        mongoose.connection.on('error', (err) => {
            console.error('DB Error');
            console.error(err);
        })
    } catch (error) {
        console.error('DB Error');
        process.exit(1);
    }
}

module.exports = init;