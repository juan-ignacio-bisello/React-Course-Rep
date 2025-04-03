const { response } = require("express");


const getEvent = ( req, res = response  ) => {

    return res.json({
        "ok": true,
        msg: 'getEventos'
    })
}

const crearEvento = ( req, res = response  ) => {

    console.log(req.body);


    res.json({
        "ok": true,
        msg: 'crearEventos'
    })
}

const actualizarEvento = ( req, res = response  ) => {

    res.json({
        "ok": true,
        msg: 'actualizarEventos'
    })
}

const eliminarEvento = ( req, res = response  ) => {

    res.json({
        "ok": true,
        msg: 'eliminarEventos'
    })
}

module.exports = {
    getEvent,
    actualizarEvento,
    crearEvento,
    eliminarEvento,
}