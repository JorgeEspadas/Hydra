const mongoose = require('mongoose');

const RespuestaSchema = mongoose.Schema({

    cdate : {
        type: Date,
        default: Date.now()
    },
    udate: {
        type: Date,
        default: Date.now()
    },
    email : {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    respuestas: [
        {
            id_pregunta : {
                type: String, 
                required: true
            },
            id_respuesta : [
                {
                    type: String,
                    required: true
                }
            ],
            categoria : {
                type: String,
                required: true
            },
        }
    ]
});

module.exports = mongoose.model('Respuestas', RespuestaSchema);