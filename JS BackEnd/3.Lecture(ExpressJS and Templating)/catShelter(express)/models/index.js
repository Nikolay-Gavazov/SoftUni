const mongoose = require('mongoose');

const connenctionString = 'mongodb://127.0.0.1:27017/catShelter';
const Cat = require('./Cat');
const Breed = require('./Breed');
async function init(){
    try {
        await mongoose.connect(connenctionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('DB connected');
        mongoose.connection.on('error', (error) => {
            console.error('Database error');
            console.error(error);
        });
    } catch (error) { 
        console.error('Error connecting to DB');
        process.exit(1);
    }
}

module.exports = init;