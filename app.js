const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();

const puerto = process.env.PUERTO;
const apiRoute = require('./routes/api/api');

app.use(express.json());
app.use('/api', apiRoute);

app.get('/', (req, res) => {
   res.sendFile('./signature.html',{root: __dirname});
});


mongoose.connect(process.env.DB_CON, {useUnifiedTopology: true, useNewUrlParser: true}, ()=> console.log('MongoDB conectado!'));

app.listen(puerto, ()=>{
    console.log('Server iniciado en puerto: '+puerto);
});