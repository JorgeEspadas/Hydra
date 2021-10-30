const mongoose = require('mongoose');
const indicador = require('./IES_Indicador');

const IESDimension = mongoose.Schema({
    titulo : {
        type: String,
        required: true
    },
    indicadores : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'IESIndicadores'
        }
    ]
});

module.exports = mongoose.model('IESDimension', IESDimension);