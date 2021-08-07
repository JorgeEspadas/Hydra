const express = require('express');
const mongoose = require('mongoose');
const app = express();

const puerto = process.env.SERVER_PORT;
const apiRoute = require('./routes/api/api');

app.use(express.json());
app.use('/api', apiRoute);

app.get('/', (req, res) => {
   res.sendFile('./signature.html',{root: __dirname});
});

app.listen(puerto, ()=>{
    console.log('Server iniciado.');
});