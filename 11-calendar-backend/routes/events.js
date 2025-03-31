// Events Routes
// /api/events
const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');
const { getEvent, actualizarEvento, crearEvento, eliminarEvento } = require('../controllers/events');

const router = Router();

router.use( validarJWT );

router.get('/', getEvent );

router.post('/', crearEvento );

router.put('/:id', actualizarEvento );

router.delete('/:id', eliminarEvento );

module.exports = router;