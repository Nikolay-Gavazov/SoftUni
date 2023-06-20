const Furniture = require('../models/Furniture');

exports.create = (data) => {
    const item = Furniture.create(data);
};

exports.getAll = async (query) => {
    const options = {};
    if(query.where){
        let [_ownerId, _id] = query.where.split('=');
        _id = _id.replaceAll('"', '');
        options._ownerId = _id;
    }
    
    return await Furniture.find(options)
    
} 

exports.findById = (id) => Furniture.findById(id);

exports.edit = (id, data) => Furniture.findByIdAndUpdate(id, data);

exports.del = (id) => Furniture.findByIdAndDelete(id);