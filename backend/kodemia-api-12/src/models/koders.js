const mongoose = require('mongoose');

// Schema
const koderSchema = new mongoose.Schema({
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
    age: {
        type: Number,
        min:0,
        max: 90,
        require: true
    },
    gender: {
        type: String,
        enum: ['m', 'f'],
        require: true
    },
    generation: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        match: /.+@.*\..*/
    }
});

// model
const model = mongoose.model( 'koders', koderSchema );

module.exports = model;