const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const AdminValidation = require('../../middleware/AdminValidation');

router.get('/', AdminValidation, async(req,res) =>{
    res.status(200).json({
        "response" : "BAD",
        "data" : {
            "exception" : {
                "message" : "Try again."
            }
        }
    });
});

module.exports = router;