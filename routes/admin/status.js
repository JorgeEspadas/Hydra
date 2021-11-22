const express = require('express');
const router = express.Router();
const log = require('../../util/log');
const config = require('../../util/config');
const responseHandler = require('../../util/web_responses');

router.get('/', async (req, res) => {
    //retrieves and returns basic information (like amount of quizzes taken, uptime, cache size or status.)
    var mongoose = require('mongoose');
    res.status(200).json(responseHandler.validResponse(
        {
            uptime: config.secondsToTime(process.uptime()),
            mongo: config.interpretMongooseConnection(mongoose.connection.readyState)
        }
    ));
});

module.exports = router;