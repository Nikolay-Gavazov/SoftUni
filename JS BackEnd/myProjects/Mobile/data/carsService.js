const Car = require('../models/car');

async function getAll(query){
    const options = {}
    if(query.search){
        options.name = new RegExp(query.search, 'i');
    }
    if(query.from){
        options.price = {$gte: Number(query.from)}; 
    }
    if(query.to){
        if(!options.price){
            options.price = {};
        }
        options.price.$lte = Number(query.to);
    }
    const cars = await Car.find(options);
    return cars;
};

async function getById(id){
    const data = await Car.findById(id).populate('options');;
 
    if(data){
        return data
    }else{
        return undefined;
    }
}

async function createCar(car){
    await Car.create(car);
}

async function deleteCar(id){
    await Car.findByIdAndDelete(id);
}

async function editCar(id, car){
    await Car.findByIdAndUpdate(id, car)
}

async function attachOption(carId, optionId){
    const car = await Car.findById(carId);
    car.options.push(optionId);
    await car.save();
}

module.exports = () => (req, res, next) => {
    req.storage = {
        getAll,
        getById,
        createCar,
        deleteCar,
        editCar,
        attachOption
    };
    next();
}
    
