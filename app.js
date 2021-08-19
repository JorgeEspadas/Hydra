const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const app = express();

const puerto = process.env.PUERTO;
const database = process.env.DB_CON;
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

mongoose.connect(database, {useUnifiedTopology: true, useNewUrlParser: true}, ()=> console.log('[SERVER] MongoDB conectado!'));

app.listen(puerto, ()=>{
    console.log('[SERVER] Servicio iniciado en puerto: '+puerto);
});