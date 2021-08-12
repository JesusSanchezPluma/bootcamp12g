// Inicializa

// Server

// Conexión a las bases de datos 

const server = require('./src/server');
const dbConnect = require('./src/lib/db');

dbConnect()
    .then(() => {
        console.log('Batabase connected... ');
        server.listen(8080, () => {
            console.log("Server listening... ");
        })
    })
    .catch(err => console.error(err))

