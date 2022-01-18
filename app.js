require('dotenv').config();
const express = require('express');
const cors = require('cors');
const log = require('./util/log');
const config = require('./util/config');
const mongoose = require('mongoose');
const app = express();
const puerto = process.env.PUERTO;
const database = (config.getDevMode() ? process.env.DB_CON_DEV : process.env.DB_CON_PROD);
const apiRoute = require('./routes/api/api');
const authRoute = require('./routes/auth/auth');
const adminRoute = require('./routes/admin/admin');
const usuarioRoute = require('./routes/user/user');

app.use(express.json());
app.use(cors());
app.use('/api', apiRoute);
app.use('/usuario', usuarioRoute);
app.use('/auth', authRoute);
app.use('/admin', adminRoute);

app.get('/', (req, res) => {
   res.sendFile('./signature.html',{root: __dirname});
});

mongoose.connect(database, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true}, () => log.normal('SERVER', 'MongoDB conetado: '+database));

if(config.getDevMode()) log.error('MODO DESARROLLADOR, CONECTANDO A BASE DE DATOS LOCAL Y SALTANDO VALIDACIONES');

app.listen(puerto, ()=>{
    log.normal('SERVER','Server iniciado en: '+puerto);
});