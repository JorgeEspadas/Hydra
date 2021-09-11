const mongoose = require('mongoose');

const CategoriaSchema = mongoose.Schema({
    id_categoria : {
        type: String,
        required: true,
        unique: true
    },
    categorias: [
        {
            titulo: {
                type: String,
                required: true
            }
        }
    ]
});

module.exports = mongoose.model('Categorias', CategoriaSchema);