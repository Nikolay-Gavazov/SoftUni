const Option = require('../models/Option');

async function getAll(){
    const data = await Option.find({});
    return data;
};

async function createOption(data){
    await Option.create(data);
};

async function getRest(ids){
    const data = await Option.find({_id: { $nin: ids } });

    if(data){
        return data;
    }else{
        return undefined;
    }
};

module.exports = () => (req, res, next) => {
    req.option = {
        getAll,
        createOption,
        getRest
    }
    next();
}