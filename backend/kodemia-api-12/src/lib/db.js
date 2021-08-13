const mongoose = require('mongoose');

const DB_USER = 'yisusDev';
const DB_PASSWORD = 'Gabriela123..';
const DB_HOST = 'kodemia-12va.cxrwv.mongodb.net';
const DB_NAME= 'kodemia';

const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

function connect () {
    return mongoose.connect( url, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false } )
}

module.exports = connect;