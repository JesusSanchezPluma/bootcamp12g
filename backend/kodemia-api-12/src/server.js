// Definición y creación de nuestro servidor

const express =  require('express');
const kodersRouter = require('./routers/koders');
const server = express();

// middlewares
server.use( express.json() );

// routers
server.use( '/koders', kodersRouter );

module.exports = server;

// Requerimiento
// Enpoint GET /koders
// 1. Asegurarnos que nuestro MODELO exista
// 2. Crear el caso de uso necesario
// 3. Crear el endpoint -> 

// POST
// DELETE /koders/:id -> findByIdAndDelete

// Practica casi final 

// Kodemia necesita poder gestionar mentores
// -Crear mentores
// -Actualizar
// -Eliminar
// -Obtener el detalle de un mentor
// -Obtener todos los datos de los mentores

// name
// LastName
// module: ['Maquetado', 'JS', 'Cloud', 'Backend', 'React']

/* {
    "name": "Fernanda",
    "LastName":"Palacios",
    "module": ['Maquetado', 'Backend']
}
 */

// Kodemia tambien necesita gestionar sus celulas de mentores:
// ¿Qué es una celula de mentores?
// Es un grupo de mentores que pueden ser asignados a un grupo
// Tiene un nombre que lo identifica
// Tiene que mentores pertenecen a dicha celula
