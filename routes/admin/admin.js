const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const AdminValidation = require('../../middleware/AdminValidation');
const responseHandler = require('../../util/web_responses');

router.get('/', AdminValidation, async(req,res) =>{
    res.status(200).json(responseHandler.validResponse({"message" : "ADMIN PAGE!"}));
});

module.exports = router;