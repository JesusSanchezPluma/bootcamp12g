const http = require('http');

const server = http.createServer((require, response)=>{
    response.setHeader(400,{'Content-Type':'application/JSON'});
    // Se tiene que pasar a cadena por que las respuestas solo mandan texto plano
    let respuesta = JSON.stringify({property1:{saludo:'Hola', saludo2:'Hola1'}, property2:{status:'Ok', status2:'Ok1'}});
    response.write(respuesta);
    response.end();
})

server.listen(8080, () =>{
    console.log('Server running in http://localhost:8080')
})