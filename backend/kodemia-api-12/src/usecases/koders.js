const Koder = require('../models/koders');

function getAll() {
    return Koder.find();
}

function create({ name, LastName, generation, gender, age }) {
    return Koder.create ({ name, LastName, generation, gender, age })
}

function deleteById(id){
    return Koder.findByIdAndDelete(id);
}

function updateById(id, newData){
    return Koder.findByIdAndUpdate( id, newData, {new:true});
}

module.exports = {
    getAll, 
    create, 
    deleteById,
    updateById
}