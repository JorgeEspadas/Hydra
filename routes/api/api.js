const express = require('express');
const router = express.Router();
const publicRoute = require('./public/public')

router.use('/public', publicRoute);

module.exports = router;