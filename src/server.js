//Módulos
//Llamando el framework del servidor
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');


//Inicialización
//servidor
const app = express();

//Configuraciones 
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');
// Middlewares
app.use(express.urlencoded({extended: false}));


//Variables globales


//Rutas
app.get('/', (req, res) => {
    res.render('index');
});


//Archivos Estáticos
app.use(express.static(path.join(__dirname, 'public')));


//Exportación
module.exports = app;