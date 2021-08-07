const express = require('express');
const app = express();
const apiRoute = require('./routes/api/api');

app.use(express.json());
app.use('/api', apiRoute);

app.get('/', (req, res) => {
    res.status(200).json({
        mensaje: "RECEIVED"
    });
});

app.listen(80, ()=>{
    console.log('Server iniciado.');
});