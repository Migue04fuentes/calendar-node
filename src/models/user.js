const {Schema, model} = require('mongoose');

const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    t_documento:{
        type: String,
        required: true
    },
    n_documento:{
        type: String,
        required: true,
        unique: true
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
},{
    timestamps: true
});

userSchema.methods.encryptPassword = async password =>{
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

userSchema.methods.matchPassword = async function(password){
    return await bcrypt.compare(password, this.password);
}

module.exports = model('User', userSchema);