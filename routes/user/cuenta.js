const express = require('express');
const router = express.Router();


router.get('/', async(req, res) =>{
    res.status(200).json({message: 'Cuenta endpoint'});
});

module.exports = router;