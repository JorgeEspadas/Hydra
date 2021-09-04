const express = require('express');
const log = require('./util/log');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const app = express();

const puerto = process.env.PUERTO;
const database = process.env.DB_CON;
const dev_mode = process.env.DEV_MODE;
const apiRoute = require('./routes/api/api');
const authRoute = require('./routes/auth/auth');
const adminRoute = require('./routes/admin/admin');

app.use(express.json());
app.use(cors());
app.use('/api', apiRoute);
app.use('/auth', authRoute);
app.use('/admin', adminRoute);

app.get('/', (req, res) => {
   res.sendFile('./signature.html',{root: __dirname});
});

app.get('/deeplink', (req,res) => {
    res.sendFile('./deeplink.html', {root: __dirname});
});

mongoose.connect(database, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true}, ()=> log.normal('SERVER', 'MongoDB conetado: '+database));

if(dev_mode) log.error('El modo desarrollador esta encendido en el .env, no hay validacion de tokens.');

app.listen(puerto, ()=>{
    log.normal('SERVER','Server iniciado en: '+puerto);
});