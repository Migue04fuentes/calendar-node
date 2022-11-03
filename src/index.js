// Importación del server app
const app = require('./server');

//Lo que va a realizar cuando se ejecute el puerte 
app.listen(app.get('port'), () => {
    console.log('server on port:', app.get('port'));
});