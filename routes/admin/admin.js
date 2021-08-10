const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const AdminValidation = require('../../middleware/AdminValidation');

router.get('/', AdminValidation, async(req,res) =>{
    res.status(200).json({
        "response" : "OK",
        "data" : {
            "exception" : {
                "message" : "Administrator Page"
            }
        }
    });
});

module.exports = router;