const express = require('express');
const mongoose = require('mongoose');
const Koder = require('./koderModel');

const server = express();

const DB_USER = 'yisusDev';
const DB_PASSWORD = 'Gabriela123..';
const DB_HOST = 'kodemia-12va.cxrwv.mongodb.net';
const DB_NAME= 'kodemia';

const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

server.get('/', ( request, response ) => {
    response.json({
        message:'API with mongoose...'
    })
});

server.get('/koders', async ( request, response ) => {
    
    const koders = await Koder.find()
    
    response.json({
        success: true,
        message:'All koders of DB...',
        data: {
            koders
        }
    })
});

mongoose.connect( url, {useNewUrlParser: true, useUnifiedTopology: true} )
    .then( async (connection)=>{
        console.log('Yeii DB Connected ... with async ');
        server.listen(8080, () => {
            console.log('Server Listening')
        });
    })
    .catch((err)=>{
        console.log('Error: ', err);
    });


// Practica:

// GET /koders?gender=m&age=23
// POST /koders
// PATCH /koders
// DELETE /koders