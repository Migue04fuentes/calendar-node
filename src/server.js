//Módulos
//Llamando el framework del servidor
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');  //Ver peticiones que llegan al servidor

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
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));  //Entender los datos que llegan de html


//Variables globales


//Rutas
app.use(require('./routes/index.routes'));
app.use(require('./routes/agenda.routes'));

//Archivos Estáticos
app.use(express.static(path.join(__dirname, 'public')));


//Exportación
module.exports = app;