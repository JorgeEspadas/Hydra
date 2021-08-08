const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();

const puerto = process.env.PUERTO;
const apiRoute = require('./routes/api/api');
const authRoute = require('./routes/auth/auth');
const adminRoute = require('./routes/admin/admin');

app.use(express.json());
app.use('/api', apiRoute);
app.use('/auth', authRoute);
app.use('/admin', adminRoute);

app.get('/', (req, res) => {
   res.sendFile('./signature.html',{root: __dirname});
});


mongoose.connect(process.env.DB_CON, {useUnifiedTopology: true, useNewUrlParser: true}, ()=> console.log('[SERVER] MongoDB conectado!'));

app.listen(puerto, ()=>{
    console.log('[SERVER] Server iniciado en puerto: '+puerto);
});