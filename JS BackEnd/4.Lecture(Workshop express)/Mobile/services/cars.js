const fs = require('fs/promises');

const filePath = './services/database.json';

async function readFile(filePath){
    try {
        const data = JSON.parse(await fs.readFile(filePath));
        return data;
    } catch (error) {
        console.log('Database read error');
        console.log(error);
        process.exit(1);
    }

}

async function write(data, filePath){
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

function nextId() {
    return 'xxxxxxxx'.replace(/x/g, () => (Math.random() * 16 | 0).toString(16));
};

module.exports = () => (req, res, next){
    res.storage = {
        getAll
    };
    next();
}