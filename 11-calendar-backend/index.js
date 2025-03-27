const express = require('express');
require('dotenv').config();

//crear servidor de express
const app = express();

// Directorio publico
app.use( express.static('public') );

// Lectura y parceo
app.use( express.json() );

// rutas
app.use('/api/auth', require('./routes/auth') );

// escuchar peticion
app.listen( process.env.PORT , () => {
    console.log(`servidor en puerto ${ process.env.PORT }` );
} )