const mongoose = require('mongoose');

const DB_USER = 'yisusDev';
const DB_PASSWORD = 'Gabriela123..';
const DB_HOST = 'kodemia-12va.cxrwv.mongodb.net';
const DB_NAME= 'kodemia';

const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

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
    }
});

// model

const Koder = mongoose.model('koders', koderSchema );

//

mongoose.connect( url, {useNewUrlParser: true, useUnifiedTopology: true} )
    .then( async (connection)=>{
        console.log('Yeii DB Connected ... with async ');

        /* Koder.find({})
            .then((koders) => {
                console.log(koders);
            })
            .catch((error) => {
                console.log(error);
            }) */

        /* const koders = await Koder.find({});
        console.log(koders); */

        const createdKoder = await Koder.create({ name: 'Alfred', LastName: 'Pizaña', gender: 'm', age:27 });
        console.log( createdKoder ); 

    })
    .catch((err)=>{
        console.log('Error: ', err);
    })