// Definicón del modelo de datos
const {Schema, model} = require('mongoose');


const agendaschema = new Schema({
    title: {
        type :String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
},{
 //   timestamps: true   //fecha de creación y actulización
})  

module.exports = model('Agenda', agendaschema);