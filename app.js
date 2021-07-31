const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).json({
        mensaje: "RECEIVED"
    });
});

app.listen(80, ()=>{
    console.log('Server iniciado.');
});