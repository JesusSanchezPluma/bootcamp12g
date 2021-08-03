/* 
require 
hace referencia el archivo http de js que tiene 
todo lo necesario para levantar un servidor 
*/

const http = require('http')

const server = http.createServer( ( request, response ) => {
    // Dondé?
    // Qué?
    // Con qué?
    // Son cosas que ya vienen configuradas en mi request
    response.statusCode = 200 //status que resuelve el servidor al resolver la petición
    //response.write('Hola koders desde el servidor')
    response.setHeader('Content-Type', 'text/html')
    responde.end('<h1>Hello, world!</h1>')
})

server.listen( 8000, () => {
    console.log('he sido lanzado en el puerto 8000')
})

/* 
8000 
es el puerto usualmente se suelen usar 
puertos de la capa de los 8000 
*/