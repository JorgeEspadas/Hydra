const mongoose = require('mongoose');

const TemporalSchema = mongoose.Schema({
    hash: {
        type: String,
        required: true
    },
    token: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Temporales', TemporalSchema)