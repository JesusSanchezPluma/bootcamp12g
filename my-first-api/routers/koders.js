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
    
    const { generation, gender, name } = request.query;
    const count = request.query.count;
    const content = await readFilePromise('kodemia.json');
    
    let koderData = content.koders;

    if(generation) {
        koderData = koderData.filter( koder => koder.generation === parseInt( generation ) );
    }

    if(gender) {
        koderData = koderData.filter( koder => koder.gender === gender);
    }

    if(name) {
        koderData = koderData.filter( koder => koder.name === name );
    } 

    if(count) {
        koderData = koderData.slice(0,count);
    } 

    content.koders =  koderData || content.koders;

    response.json({
        success: true,
        message: "se mostrará solo un Koder",
        data:{
            koders: content.koders
        }
    })
})

router.post('/', async (request,response) => {
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

router.patch('/:id', async ( request, response ) => {
    const { id } = request.params;
    const { name, generation } = request.body;

    const content = await readFilePromise('kodemia.json');

    const updatedkoder = content.koders.map( (item) => {
        if(item.id === parseInt(id)){
            item.name = name;
            item.generation =  generation;
            //koder={...koder, name, generation};
        }
        return item
    })

    content.koders = updatedkoder;

    fs.writeFileSync('kodemia.json',JSON.stringify(content,null,4),'utf8');

    response.json({
        success: true,
        message: "Se actualizo con éxito",
        data:{
            updatedkoder
        }
    })
})

router.delete('/:id', async ( request, response ) => {
    const { id } = request.params;
    const content = await readFilePromise('kodemia.json');

    content.koders = content.koders.filter( koder => {
        return koder.id != parseInt(id)
    })

    fs.writeFileSync('kodemia.json',JSON.stringify(content,null,4),'utf8');

    response.json({
        success: true,
        message: "Se borro con exito",
    })
})

module.exports = router;