const express = require('express');
const router = express.Router();
const AdminValidation = require('../../middleware/AdminValidation');
const responseHandler = require('../../util/web_responses');
const entidadRoute = require('./entidad');
const statusRoute = require('./status');
const temporalRoute = require('./qtoken');

//router level middleware.
router.use(AdminValidation);
router.use('/entidad', entidadRoute);
router.use('/status', statusRoute);
router.use('/temporal', temporalRoute);

router.get('/', AdminValidation, async(req,res) =>{
    res.status(200).json(responseHandler.validResponse({"message" : "Admin Endpoint"}));
});

module.exports = router;