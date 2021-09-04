const mongoose = require('mongoose');

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