const http = require('http');

//CreateServer recibe un callback que es request y response, esto es posicional

const server = http.createServer((request, response)=>{
    console.log('path: ', request.url);
    console.log('method: ', request.method)

    if(request.url == '/mentors' && request.method == 'GET'){
        response.write('Aqui encontraras a los mentores de kodemia')
    } else if(request.url == '/mentors' && request.method == 'POST'){
        response.write('Aqui podrás crear un mentor')
    } else {
        response.write('No se esperaba esto')
    }
    // response.write('Hola desde mi servidor node ');
    response.end();
})

server.listen(8080,() =>{
    console.log('Server running un http://localhost:8080');
})

/*

URL -> /mentors

GET /mentors -> 'Aqui encontraras a los mentores de kodemia'

POST /mentors -> 'Aqui podrás crear un mentor'

-> 'No se esperaba esto'

*/