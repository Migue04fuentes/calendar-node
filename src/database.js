const mongoose = require('mongoose');

//Importaciones de variables de entorno
const { MONGODB_HOST, MONGODE_DATABASE} = process.env;

//URL de conexión
const MONGODB_URI = `mongodb://${MONGODB_HOST}/${MONGODE_DATABASE}`;

//Conexión base de datos
mongoose.connect(MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
})
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err));
