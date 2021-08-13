const mongoose = require('mongoose');

// Schema
const mentorSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: 2,
        maxLength: 50,
        require: true,
        trim: true
    },
    LastName: {
        type: String,
        minLength: 2,
        maxLength: 50,
        require: true,
        trim: true
    },
    gender: {
        type: String,
        enum: ['m', 'f'],
        require: true
    },
    module: [{
        type: String,
        minLength: 2,
        maxLength: 50,
        require: true,
        trim: true,
        enum: ['Negocios', 'MPV', 'Maquetado', 'Backend', 'Js', 'Branding Profesional'],

    }]
});

// model
const modelMentors = mongoose.model( 'mentors', mentorSchema );

module.exports = modelMentors;