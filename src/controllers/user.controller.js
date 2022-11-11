const { response, render } = require("../server");

// Objeto donde se guardaran las funciones
const userCtrl = {};

// Importación del modelo
const User = require('../models/user');

// Funciones
//Renderizar al formulario
userCtrl.renderregistro = (req, res) => {
    res.render('user/registro');
}

//Guardar registro
userCtrl.saveregistro = async (req, res) => {
    const messageserr = [];
    const { wm_signup_tdocument, wm_signup_cedula,
        wm_signup_nombre, wm_signup_apellido,
        wm_signup_telefono, wm_signup_password,
        wm_signup_confirmpass } = req.body;

    if (wm_signup_password != wm_signup_confirmpass) {
        messageserr.push({text:'Las contraseñas no coinciden'});
        res.redirect('registro');
    }
    if (wm_signup_password.length != 4) {
        messageserr.push({text: '¡La longitud de las contraseñas no hes la indicada!'});
            res.redirect('registro');
    }
    if(messageserr.length > 0){
        res.render('user/registro',{
        messageserr});
    }
    else {
        const usuario = new User({
            t_documento: wm_signup_tdocument,
            n_documento: wm_signup_cedula,
            nombre: wm_signup_nombre,
            apellido: wm_signup_apellido,
            telefono: wm_signup_telefono
        });
        console.log(usuario);
        // await usuario.save();
        req.flash('user_msg', 'Registro Exitoso');
        res.redirect('/');
    }
}

//Renderizar al Login
userCtrl.signinform = (req, res) => {
    res.render('index');
}

//Inicio de sesión
userCtrl.signincheck = (req, res) => {
    res.send('Check of login');
}

//Cerrar sesión
userCtrl.logout = (req, res) => {
    res.send('He left his session');
}

// Exportaciones
module.exports = userCtrl;

