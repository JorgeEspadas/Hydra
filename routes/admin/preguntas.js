const express = require('express');
const verifyToken = require('../../middleware/AdminValidation');
const router = express.Router();

// esta api es para administradores

router.get('/', verifyToken, (req,res) => {
    res.status(200).json({
        message: 'preguntas?'
    });
});

module.exports = router;