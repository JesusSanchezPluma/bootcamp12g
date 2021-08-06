const { response } = require("express");
const express = require("express");
const fs = require('fs');

// para tener acceso al server se tiene que instanciar express

const server = express();

// SE tiene que pasar a JSON por que el fs lo trae como string
var objectKodemia = JSON.parse(fs.readFileSync('./kodemia.json'));

console.log( 'objeto: ', objectKodemia.koders );

//middleware
server.use( express.json() );

// Peticiones

server.get('/', ( request, response ) => {
    response.write('Hello world from inside express');
    response.end();
})

/* server.get('/koders', ( request, response ) => {
    response.status(201).json({
        messaje: 'hello koders'
    })
}); */

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

/* server.post('/koders', ( request, response ) => {
    
    const body = request.body;
    console.log('Body: ', body);

    response.status(201).json({
        message: 'Aqui se creará un koder'
    });
}) */

// en ruta mentors
// GET /mentors -> un JSON
// POST /mentors -> un JSON

// fs + express
// leer del archivo kodemia.json y regresar los koders desde un metodo GET /koders
// GET / koders ->
// POST /mentors ->

// Esta petición sirve para imprimir un objeto que viene de un JSON}

/* server.get('/koders', (require,response) => {
    response.status(201).json(objectKodemia);
}) */

/* server.post('/koders', ( require, response ) => {
    var newKoder = {
        "name":"YISUS",
        "generation":12
    };
    var readJson = JSON.parse(fs.readFileSync('./kodemia.json'));
    var updateJson = readJson.koders.push(newKoder);
    var responseJson = JSON.stringify(readJson);
    
    fs.writeFileSync('./kodemia.json', responseJson);
    
    console.log( "readJSON:", readJson );
    console.log( "updateJSON:", updateJson );
    response.status(201).json(readJson);
})  */

///////////
function readFilePromise(pathToRead) {
    return new Promise ( ( resolve, reject ) => {
        fs.readFile( pathToRead, 'utf8', ( error, content ) => {
            if (error) {
                reject (error);
            } else {
                const json = JSON.parse( content );
                resolve( json );
            }
        })
    })
}

server.get('/koders', async ( request, response ) => {
    const content = await readFilePromise('kodemia.json');
    response.status(200).json({
        success: true,
        message: 'All koders',
        data: {
            koders: content.koders
        }
    })
})

server.post('/koders', async (request,response) => {
    const newKoder = request.body;
    const content = await readFilePromise('Kodemia.json');

    content.koders.push(newKoder); // se agrega lo recibido en el body de la request

    fs.writeFileSync('kodemia.json',JSON.stringify(content, null, 4),'utf8');

    response.json({ // esto es la respuesta 
        success: true,
        message: 'Koder Added',
        data: {
            koder: newKoder
        }
    })

})