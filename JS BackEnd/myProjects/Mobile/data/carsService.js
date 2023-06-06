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
    const data = await Car.findById(id);
 
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

module.exports = () => (req, res, next) => {
    req.storage = {
        getAll,
        getById,
        createCar,
        deleteCar,
        editCar
    };
    next();
}
    
