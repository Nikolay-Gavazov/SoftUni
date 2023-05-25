const fs = require('fs/promises');

const filePath = `./services/database.json`;

async function readFile(){
    try {
        const data = JSON.parse(await fs.readFile(filePath));
        return data;
    } catch (error) {
        console.log('Database read error');
        console.log(error);
        process.exit(1);
    }

}

async function write(data){
    try {
        await fs.writeFile(filePath, JSON.stringify(data, null, 2));
    
    } catch (error) {
        console.log('Database read error');
        console.log(error);
        process.exit(1);
    }
}

async function getAll(query){
    const data = await readFile();
    let cars = Object
    .entries(data)
    .map(([id, v]) => Object.assign({}, {id}, v));

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
    const data = await readFile();
    const car = data[id];
    
    if(car){
        return Object.assign({}, {id}, car);
    }else{
        return undefined;
    }
}

async function createCar(car){
    const data = await readFile();
    const id = nextId();

    data[id] = car;

    await write(data);
}

function nextId() {
    return 'xxxxxxxx'.replace(/x/g, () => (Math.random() * 16 | 0).toString(16));
};

module.exports = () => (req, res, next) => {
    req.storage = {
        getAll,
        getById,
        createCar
    };
    next();
}
    
