const { response, render} = require("../server");

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
    const { wm_signup_tdocument, wm_signup_cedula,
        wm_signup_nombre, wm_signup_apellido,
        wm_signup_telefono } = req.body;

    const usuario = new User({
        t_documento: wm_signup_tdocument,
        n_documento: wm_signup_cedula,
        nombre: wm_signup_nombre,
        apellido: wm_signup_apellido,
        telefono: wm_signup_telefono
    });

    await usuario.save();
    res.render('index');
}

// Exportaciones
module.exports = userCtrl;

