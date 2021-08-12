// Definición y creación de nuestro servidor

const express =  require('express');
const kodersRouter = require('./routers/koders');
const server = express();

// middlewares

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