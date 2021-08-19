const express = require('express');
const router = express.Router();
const time = require('moment');

router.get('/', (req,res) => {
    let date = time().utc();
    let future = date.clone().add(1,'day');

    let dateCopy = time(date.format());
    let futureCopy = time(future.format());
    
    console.log('Time: '+dateCopy.format());
    console.log('Future: '+futureCopy.format());
    console.log('diff: '+dateCopy.isAfter(futureCopy));
    res.status(200).json({response:date});
});

module.exports = router;