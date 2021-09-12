const express = require('express');
const router = express.Router();
const loginRoute = require('./login');
const cuentaRoute = require('./cuenta');

router.use('/login', loginRoute);
router.use('/cuenta', cuentaRoute);

//Este es un endpoint temporal, ya que no se tendra libertad para crear usuarios nada mas por que si.
//Probablemente se migre este pedazo de codigo a otro endpoint en el futuro, por ahora es /auth/signup.

module.exports = router;