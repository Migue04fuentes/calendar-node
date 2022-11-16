const { response, render } = require("../server");

// Objeto de funciones
const agendaCtrl = {};

// IMportar del models
const agenda = require('../models/agendas');

//Función del formulario de agenda
agendaCtrl.agendaform = (req, res) => {
    res.render('calendario/calendar');
};

// Función de guardar new cita
agendaCtrl.newcita = async (req, res) => {
    const { namedoctor, description, fecha, hora } = req.body;
    const newagenda = new agenda({ title: namedoctor, description, fecha: fecha, hora });
    newagenda.usuario = req.user.id;
    await newagenda.save();
    res.render('calendario/calendar');
};

// Función de mostra todas las citas
agendaCtrl.rendercitas = async (req, res) => {
    // const citas = await agenda.find();
    const citas = await agenda.find({usuario: req.user.id});
    res.send(citas);
};

//Función para editar citas
agendaCtrl.editcitas = (req, res) => {
    res.send('Editar Citas');
}

agendaCtrl.updatecita = (req, res) => {
    res.send('Actualizar cita');
}

//Función de eliminar cita
agendaCtrl.deletecita = (req, res) => {
    res.send('Eliminar cita');
}

// Exportaciones
module.exports = agendaCtrl;