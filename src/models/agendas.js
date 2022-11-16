// Definicón del modelo de datos
const { Schema, model } = require('mongoose');


// Esquema de guardado de datos
const agendaschema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    fecha: {
        type: String,
        required: 'required fecha'
    },
    hora: {
        type: String,
        required: true
    },
    usuario: {
        type: String,
        required: true
    }
}, {
    //   timestamps: true   //fecha de creación y actulización
})

module.exports = model('Agenda', agendaschema);