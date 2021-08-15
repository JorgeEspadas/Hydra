var cres = require('../../util/web_responses');
const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.status(200).json(cres.kValidResponse({"token" : "sintoken", "rol" : 0}));
});

module.exports = router;