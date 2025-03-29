/*
    Rutas de usuarios / auth
    host + /api/auth
*/

const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();

const { crearUsuario, loginUsuario, revalidarToken } = require('../controlers/auth')

// router.get('/', ( req, res ) => {
    
//     res.json({
//         "ok": true
//     })
// });


router.get(
    '/renew', revalidarToken );

router.post(
    '/new', 
    [   // middlewares
        check('name', 'El nombre es obligatorio' ).not().isEmpty(),
        check('email', 'El email es obligatorio' ).isEmail(),
        check('password', 'El password debe ser de 6 caracteres' ).isLength({ min: 6 })
    ],
     crearUsuario );

router.post(
    '/', 
    [   // middlewares
        check('email', 'El email es obligatorio' ).isEmail(),
        check('password', 'El password debe ser de 6 caracteres' ).isLength({ min: 6 })
    ],
     loginUsuario );



module.exports = router;