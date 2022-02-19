const mongoose = require('mongoose');

const ConfigSchema = mongoose.Schema({
    tipo : {
        type: String,
        required: true
    },
    configuracion : {
        type: Array,
        default: []
    }
});

module.exports = mongoose.model('config', ConfigSchema);