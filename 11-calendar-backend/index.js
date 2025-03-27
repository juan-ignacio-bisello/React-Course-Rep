const express = require('express');
require('dotenv').config();

//crear servidor de express
const app = express();

// Directorio publico
app.use( express.static('public') );

// rutas
// app.get('/', ( req, res ) => {
    
//     res.json({
//         "ok": true
//     })
// })

// escuchar peticion
app.listen( process.env.PORT , () => {
    console.log(`servidor en puerto ${ process.env.PORT }` );
} )