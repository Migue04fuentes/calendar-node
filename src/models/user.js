const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    t_documento:{
        type: String,
        required: true
    },
    n_documento:{
        type: String,
        required: true
    },
    nombre:{
        type: String,
        required: true
    },
    apellido:{
        type: String,
        required: true
    },
    telefono:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: false
    }
})

module.exports = model('User', userSchema);