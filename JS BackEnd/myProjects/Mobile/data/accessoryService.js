const Accessory = require('../models/Accessory');

async function getAll(){
    const data = await Accessory.find({});
    return data;
};

async function createAccessory(data){
    await Accessory.create(data);
};

async function getRest(ids){
    const data = await Accessory.find({_id: { $nin: ids } });

    if(data){
        return data;
    }else{
        return undefined;
    }
};

module.exports = () => (req, res, next) => {
    req.accessory = {
        getAll,
        createAccessory,
        getRest
    }
}