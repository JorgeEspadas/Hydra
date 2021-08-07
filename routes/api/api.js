const express = require('express');
const auth = require('../../middleware/TokenValidation');
const router = express.Router();

router.get('/', auth, (req, res) =>{
    res.status(200).json({
        message: 'Bienvenido a /api perro :v' // cambiar este mensaje :v
    });
});

module.exports = router;