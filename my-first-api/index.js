const express = require("express");

// para tener acceso al server se tiene que instanciar express

const server = express();

server.get('/', ( request, response ) => {
    response.write('Hello world from inside express');
    response.end();
})

server.get('/koders', ( request, response ) => {
    response.setHeader('Content-Type', 'application/json');
    
    const responseObj = {messaje: 'Hola'};
    
    response.write(JSON.stringify( responseObj ));
    response.end();
});

server.get('/mentors', ( request, response ) => {
    response.setHeader('Content-Type', 'application/json');
    const objMentors = {mentor1: 'name', mentor2: 'name2'};
    response.write(JSON.stringify(objMentors));
    response.end();
})

server.post('/mentors', ( request, response ) => {
    response.setHeader('Content-Type', 'application/json');
    const objMentorsPost = {anotgherMentor1: 'name', anotherMentor2: 'name2'};
    response.write(JSON.stringify(objMentorsPost));
    response.end();
})

server.listen( 8080, ( ) => {
    console.log('listening on port 8080');
});

// en ruta mentors
// GET /mentors -> un JSON
// POST /mentors -> un JSON