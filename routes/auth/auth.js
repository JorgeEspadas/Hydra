const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY;

router.post('/login', async (req,res) => {
    // metodo para loguear.
});

router.post('/signup', async(req,res) => {
    const receivedUser = new User({
        email: req.body.email,
        password: req.body.password,
        telefono: req.body.telefono
    });

    try{
        const lookup = await User.find({"email":receivedUser.email});
        if(lookup.length<1){
            //no encontramos a nadie con ese email asi que lo vamos a registrar.
            console.log('[AUTH/SIGNUP] No encontre a nadie con el email: '+receivedUser.email+'... registrando.');
            jwt.sign({receivedUser},secretKey, (err, token) =>{
                receivedUser.token = token;
            });

            await receivedUser.save();
            res.status(200).json({
                "response" : "OK",
                "data" : {
                    "token" : receivedUser.token
                }
            });
            console.log('[AUTH/SIGNUP] El usuario fue registrado en base de datos.')
        }
    }catch(error){
        res.status(200).json({
            "response" : "BAD",
            "data" : {
                "exception" : {
                    "message" : error
                }
            }
        });
    }
});

module.exports = router;