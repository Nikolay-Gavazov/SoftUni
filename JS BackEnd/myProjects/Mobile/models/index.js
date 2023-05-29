const mongoose = require('mongoose');

const connectionStr = 'mongodb://127.0.0.1:27017/mobile';

const Car = require('./Car');

async function init(){
    try {
        await mongoose.connect(connectionStr, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('DB connected');
        
        Car.create({"name": "BMW X5 4.0D",
        "description": "189000 km. Newly imported. 09.2015. Diesel. 313PS. Euro 6. Automatic transmission. Black.",
        "imageUrl": "bmw-x5-m-f15.jpg",
        "price": 53000})
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