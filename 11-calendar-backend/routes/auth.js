/*
    Rutas de usuarios / auth
    host + /api/auth
*/

const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();
const { validarCampos } = require('../middlewares/Validar-compos');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');


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
        check('password', 'El password debe ser de 6 caracteres' ).isLength({ min: 6 }),
        validarCampos
    ],
     crearUsuario );

router.post(
    '/', 
    [   // middlewares
        check('email', 'El email es obligatorio' ).isEmail(),
        check('password', 'El password debe ser de 6 caracteres' ).isLength({ min: 6 }),
        validarCampos
    ],
     loginUsuario );



module.exports = router;