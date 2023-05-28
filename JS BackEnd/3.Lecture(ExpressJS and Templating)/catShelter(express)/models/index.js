const mongoose = require('mongoose');

const connenctionString = 'mongodb://127.0.0.1:27017';

async function init(){
    try {
        await mongoose.connect(connenctionString, {
            useNewUrlParser: true,
            useUnifiedtoplogy: true
        });

        mongoose.connection.on('error', (error) => )
    } catch (error) {
        console.error('Error connecting to DB');
        process.exit(1);
    }
}