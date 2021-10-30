const mongoose = require('mongoose');

const IESIndicador = mongoose.Schema({
    titulo : {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('IESIndicadores', IESIndicador);