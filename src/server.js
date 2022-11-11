//Módulos
//Llamando el framework del servidor
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');  //Ver peticiones que llegan al servidor
const flash = require('connect-flash');//Definir mensajes
const session = require('express-session');//Lugar donde se guardaran los mensajes 

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
app.use(express.urlencoded({ extended: false }));  //Entender los datos que llegan de html
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(flash());

//Variables globales
app.use((req, res, next) => {
    res.locals.user_msg = req.flash('user_msg');
    // res.locals.usererr_msg = req.flash('usererr_msg');
    next();
});

//Rutas
app.use(require('./routes/index.routes'));
app.use(require('./routes/agenda.routes'));
app.use(require('./routes/user.routes'));
//Archivos Estáticos
app.use(express.static(path.join(__dirname, 'public')));


//Exportación
module.exports = app;