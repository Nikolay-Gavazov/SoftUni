const fs = require('fs/promises');

async function readFile(location){
    const data = JSON.parse((await fs.readFile(`./data/${location}.json`)).toString());
    return data;
}

async function write(location, data){
    try {
       await fs.writeFile(`./data/${location}.json`, JSON.stringify(data, null, 2))
    } catch (error) {
        console.log('Database read error');
        console.log(error);
        process.exit(1);
    }
}

async function getItem(id, location){
    const data = await getData(location);
    return data[id];
}

async function getAll(location) {
    const data = await readFile(location);

    return Object
    .entries(data)
    .map(([id, item]) => Object.assign({}, item, {id}));
}

async function searchItem(query) {
    const cats = await getAll('cats');
    const result = [];

    console.log(query.search);
    if(query.search){
    cats.forEach(cat => {
        for (let el in cat) {
            if (cat[el].toLocaleLowerCase().includes(query.search.toLocaleLowerCase())) {
                result.push(cat);
            }
        }
    });
    return result;
    }else{
        return cats;
    }
    
}


async function createData(data, location){
    const dataBase = await readFile(location);
    const id = nextId();
    dataBase[id] = data;

    await write(location, dataBase);
}

async function editData(data, id, location){
    const dataBase = await readFile(location);

    dataBase[id] = data;

    await write(location, dataBase);
}

async function deleteData(id, location){
    const dataBase = await readFile(location);

    delete dataBase[id];

    await write(location, dataBase);
}

function nextId() {
    return 'xxxxxxxx'.replace(/x/g, () => (Math.random() * 16 | 0).toString(16));
};

module.exports = () => (req, res, next) => {
    req.storage = {
        getAll,
        createData,
        getItem,
        editData,
        deleteData,
        searchItem
    };
    next();
}
