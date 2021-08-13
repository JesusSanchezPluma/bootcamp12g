const Mentor = require('../models/mentors');

function getAll() {
    return Mentor.find();
}

function create({ name, LastName, gender, module }) {
    return Mentor.create ({ name, LastName, gender, module })
}

function deleteById(id){
    return Mentor.findByIdAndDelete(id);
}

function updateById(id, newData){
    return Mentor.findByIdAndUpdate( id, newData, {new:true});
}

function showMentorById(id) {
    return Mentor.findById(id);
}

module.exports = {
    getAll, 
    create, 
    deleteById,
    updateById,
    showMentorById
}