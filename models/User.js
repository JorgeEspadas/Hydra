const mongoose = require('mongoose');

// LEGACY.
// ESTE COMPONENTE SOLO SE USA PARA USUARIOS ADMINISTRATIVOS.
// NO ES SOPORTADO POR NINGUN ENDPOINT.

const UserSchema = mongoose.Schema({
    email : {
        type: String,
        required: true,
    },
    nombre: {
        type : String, 
        required : true
    },
    rol: {
        type: Number,
        default: 0
    },
    password: {
        type: String,
        required: true
    },
    telefono : {
        type: String,
        required: true
    },
    token: {
        type: String
    }
});

module.exports = mongoose.model('Usuarios', UserSchema);