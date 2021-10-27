const mongoose = require('mongoose');

/**
 * ID va a ser reemplazado por el id de mongo
 * y ya :v
 */


const PreguntaSchema = mongoose.Schema({
    id_pregunta: {
        type: String,
        required: true,
        unique: true
    },
    texto: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    modulo : {
        type: String,
        required: true
    },
    multiples: {
        type: Boolean,
        default: false
    },
    respuestas : [
        {
            id_respuesta : {
                type: String,
                required: true
            },
            texto: {
                type: String,
                required: true
            },
            abierta: {
                type: Boolean,
                default: false
            },
            siguiente:{
                type: String, // ID de la pregunta que seguiria, por default null.
                default: null
            }
        }
    ],
    siguiente: {
        type: String, // si no tiene ninguna liga se defaultea a null
        default: null // esto es peligroso y debe ser tratado en frontend*
    }
});

module.exports = mongoose.model('Preguntas', PreguntaSchema);