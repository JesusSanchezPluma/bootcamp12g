const express = require('express');
const router = express.Router();
const fs = require('fs');

// Función promificada para leer un archivo
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

router.get('/', async (request, response) => {
    
    const { name, module } = request.query;
    const count = request.query.count;
    const content = await readFilePromise('kodemia.json');
    
    let mentorsData = content.mentors;

    if(name) {
        mentorsData = mentorsData.filter( mentor => mentor.name === name );
    } 

    if(module) {
        mentorsData = mentorsData.filter( mentor => mentor.module === module );
    }

    if(count) {
        mentorsData = mentorsData.slice(0,count);
    } 

    content.mentors =  mentorsData || content.mentors;

    response.json({
        success: true,
        message: "Mentors pedidos: ",
        data:{
            koders: content.mentors
        }
    })
})

router.post('/', async (request,response) => {
    const newMentor = request.body;
    const content = await readFilePromise('Kodemia.json');

    content.mentors.push(newMentor); // se agrega lo recibido en el body de la request

    fs.writeFileSync('kodemia.json',JSON.stringify(content, null, 4),'utf8');

    response.json({ // esto es la respuesta 
        success: true,
        message: 'Mentor Added',
        data: {
            koder: newMentor
        }
    })
})

router.patch('/:id', async ( request, response ) => {
    const { id } = request.params;
    const { name, module } = request.body;

    const content = await readFilePromise('kodemia.json');

    const updatedMentor = content.mentors.map( (item) => {
        if(item.id === parseInt(id)){
            item.name = name;
            item.module =  module;
            //koder={...koder, name, generation};
        }
        return item
    })

    content.mentors = updatedMentor;

    fs.writeFileSync('kodemia.json',JSON.stringify(content,null,4),'utf8');

    response.json({
        success: true,
        message: "Se actualizo con éxito",
        data:{
            updatedMentor
        }
    })
})

router.delete('/:id', async ( request, response ) => {
    const { id } = request.params;
    const content = await readFilePromise('kodemia.json');

    content.mentors = content.mentors.filter( mentor => {
        return mentor.id != parseInt(id)
    })

    fs.writeFileSync('kodemia.json',JSON.stringify(content,null,4),'utf8');

    response.json({
        success: true,
        message: "Se borro con exito",
    })
})

module.exports = router;