const Car = require('../models/Car');

async function getAll(query){
    const data = await Car.find({});
    let cars = data;
    if(query.search){
        cars = cars.filter(car => car.name.toLocaleLowerCase().includes(query.search.toLocaleLowerCase()));
    }

    if(query.from){
        cars = cars.filter(car => car.price >= Number(query.from));
    }

    if(query.to){
        cars = cars.filter(car => car.price <= Number(query.to));
    }
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
    
