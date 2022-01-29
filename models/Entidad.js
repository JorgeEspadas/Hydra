const mongoose = require('mongoose');

const EntidadSchema = mongoose.Schema({
    hash: {
        type: String,
        required: true
    },
    token: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Entidades', EntidadSchema)