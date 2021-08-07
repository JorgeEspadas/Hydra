const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    res.status(200).json({
        message: 'Bienvenido a /api perro :v' // cambiar este mensaje :v
    });
});

module.exports = router;