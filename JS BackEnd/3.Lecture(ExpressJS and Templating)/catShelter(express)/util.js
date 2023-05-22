const fs = require('fs/promises');

async function readFile(location){
    const data = JSON.parse((await fs.readFile(`./data/${location}.json`)).toString());
    return data;
}

async function getData(location) {
    const data = await readFile(location);

    return Object
    .entries(data)
    .map(([_id, item]) => Object.assign({}, item, {_id}));
}

async function getItem(id, location){
    const data = await getData(location);
    let result ='';
    data.forEach(el => {
        if(el._id == id){
            result = el;
        }
    });
    return result;
}


async function createData(data, location){
    const dataBase = await readFile(location);
    const _id = nextId();
    dataBase[_id] = data;

    fs.writeFile(`./data/${location}.json`, JSON.stringify(dataBase, null, 2))
}

async function editData(data, _id, location){
    const dataBase = await readFile(location);

    dataBase[_id] = data;

    fs.writeFile(`./data/${location}.json`, JSON.stringify(dataBase, null, 2))
}

async function deleteData(_id, location){
    const dataBase = await readFile(location);

    delete dataBase[_id];

    fs.writeFile(`./data/${location}.json`, JSON.stringify(dataBase, null, 2))
}

function getFormData(body){
    const formdata = body
            .split('&')
            .map(prop => prop.split('='))
            .reduce((r, [k, v]) => Object.assign(r, { [k]: decodeURIComponent(v.split('+').join(' ')) }), {});

    return formdata;
}

async function searchItem(req) {
    const query = getParams(req, 'query');
    const cats = await getData('cats');
    const result = [];
    cats.forEach(cat => {
        for (let el in cat) {
            if (cat[el] == query) {
                result.push(cat);
            }
        }
    });
    return result;

}

function nextId() {
    return 'xxxxxxxx'.replace(/x/g, () => (Math.random() * 16 | 0).toString(16));
};

function getParams(req, param) {
    return req.url.searchParams.get(param);
}

module.exports = {
    getData,
    createData,
    getItem,
    getParams,
    editData,
    getFormData,
    deleteData,
    searchItem
}
