const express = require('express');

//crear servidor de express
const app = express();

// rutas
app.get('/', ( req, res ) => {
    
    res.json({
        "ok": true
    })
})

// escuchar peticion
app.listen( 6000, () => {
    console.log(`servidor en puerto ${ 6000 }` );
} )