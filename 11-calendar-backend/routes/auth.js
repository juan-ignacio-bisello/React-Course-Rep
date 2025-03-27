/*
    Rutas de usuarios / auth
    host + /api/auth
*/

const { Router } = require('express');
const router = Router();
const { crearUsuario, loginUsuario, revalidarToken } = require('../controlers/auth')

// router.get('/', ( req, res ) => {
    
//     res.json({
//         "ok": true
//     })
// });


router.get('/renew', revalidarToken );

router.post('/new', crearUsuario );

router.post('/', loginUsuario );



module.exports = router;