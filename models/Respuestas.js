const mongoose = require('mongoose');

const RespuestaSchema = mongoose.Schema({
    email: {
        type: String
    },
    rol: {
        type: Number,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    respuestas: {
        type: Array,
        required: true
    },
    cdate: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Respuestas', RespuestaSchema);