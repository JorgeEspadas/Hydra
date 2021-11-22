const express = require('express');
const router = express.Router();
const validation = require('../../middleware/TokenValidation');

const cuentaRoute = require('./cuenta');

router.use(validation);
router.use('/cuenta', cuentaRoute);

module.exports = router;