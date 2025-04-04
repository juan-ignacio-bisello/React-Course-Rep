const { response } = require("express");
const Evento = require("../models/Evento");


const getEvent = ( req, res = response  ) => {

    return res.json({
        "ok": true,
        msg: 'getEventos'
    })
}

const crearEvento = async( req, res = response  ) => {

    const evento = new Evento( req.body );

    try {

        evento.user = req.uid;
        
        const eventoGuardado = await evento.save()

        res.json({
            ok: true,
            evento: eventoGuardado
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Habla con el ADMIN'
        });
    }

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