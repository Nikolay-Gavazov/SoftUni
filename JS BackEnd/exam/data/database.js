const mongoose = require('mongoose');
/* pBUx3DKZ18h2OB7N qF59AAlxKgUEWWoY nikeca1991 */
const connectionStr = 'mongodb+srv://nikeca1991:qF59AAlxKgUEWWoY@cluster0.2rhjdfn.mongodb.net/';

const Animal = require('../models/Animal');
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
            //console.error(err);
        })
    } catch (error) {
        console.error('DB error');
        process.exit(1);
    }
}

module.exports = init;