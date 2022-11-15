const { response, render } = require("../server");

// Objeto donde se guardaran las funciones
const userCtrl = {};

//Importación de passport
const passport = require('passport');

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
        const cedulauser = await User.findOne({ n_documento: wm_signup_cedula });
        if (cedulauser) {
            req.flash('usererr_msg', '¡Ya existe un usuario con está nro de documento!');
            res.redirect('registro');
        } else {

            const usuario = new User({
                t_documento: wm_signup_tdocument,
                n_documento: wm_signup_cedula,
                nombre: wm_signup_nombre,
                apellido: wm_signup_apellido,
                telefono: wm_signup_telefono,
                password: wm_signup_password
            });
            usuario.password = await usuario.encryptPassword(wm_signup_password);
            await usuario.save();
            req.flash('user_msg', 'Registro Exitoso');
            res.redirect('/');
        }
    }
}

//Renderizar al Login
userCtrl.signinform = (req, res) => {
    res.render('index');
}

//Inicio de sesión
userCtrl.signincheck = passport.authenticate('local',{
    failureRedirect: '/',
    successRedirect: '/calendar',
    failureFlash: true
});

//Cerrar sesión
userCtrl.logout = (req, res) => {
    req.logout();
    req.flash('user_msg', 'La sesión ha sido cerrada.');
    res.redirect('/');
}

// Exportaciones
module.exports = userCtrl;

