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

async function getAll(){
    const data = await readFile();
    return Object
    .entries(data)
    .map(([id, v]) => Object.assign({}, {id}, v))
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
    
