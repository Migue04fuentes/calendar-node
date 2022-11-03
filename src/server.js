//Módulos
//Llamando el framework del servidor
const express = require('express');
const path = require('path');
//Inicialización
//servidor
const app = express();

//Configuraciones 
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));


// Middlewares
app.use(express.urlencoded({extended: false}));


//Variables globales


//Rutas
app.get('/', (req, res) => {
    res.send('Calendar');
});


//Archivos Estáticos
app.use(express.static(path.join(__dirname, 'public')));


//Exportación
module.exports = app;