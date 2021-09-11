const express = require('express');
const router = express.Router();
const verifyToken = require('../../middleware/TokenValidation');

router.get('/', verifyToken, async(req, res) =>{
    res.status(200).json({message: 'Cuenta endpoint'});
});

module.exports = router;