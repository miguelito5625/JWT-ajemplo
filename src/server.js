const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();

// inicializacion
const app = express();


//configuracion
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Rutas
const routes = require('./routes/index');
app.use(routes);

//Ejecutando el serve
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () =>{
    console.log(`Servidor en el puerto ${app.get('port')}`);
});