const mongoose = require('mongoose');

const PreguntaSchema = mongoose.Schema({
    id_pregunta: {
        type: String,
        required: true,
    },
    texto: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
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
            siguiente:{
                type: String, // ID de la pregunta que seguiria, por default null.
                default: null
            }
        }
    ],
    siguiente: {
        type: String,
        required: true,
        default: null
    }
});

module.exports = mongoose.model('Preguntas', PreguntaSchema);