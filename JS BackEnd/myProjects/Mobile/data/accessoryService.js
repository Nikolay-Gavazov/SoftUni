const Accessory = require('../models/Accessory');

async function getAll(){
    const data = await Accessory.find({});
    return data;
};

