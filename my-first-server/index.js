const http = require('http');

//CreateServer recibe un callback que es request y response, esto es posicional

const server = http.createServer((request, response)=>{
    console.log('path: ', request.url);
    console.log('method: ', request.method)
    response.write('Hola desde mi servidor node');
    response.end();
})

server.listen(8080,() =>{
    console.log('Server running un http://localhost:8080');
})