const { response, render } = require("../server");

// Objeto de funciones
const agendaCtrl = {};


//Función del formulario de agenda
agendaCtrl.agendaform = (req ,res) =>{
    // res.send('agenda formulario');
    res.render('index');
};

// Función de guardar new cita
agendaCtrl.newcita = (req, res) => {
    console.log(req.body);
    res.send('funciones');
};

// Función de mostra todas las citas
agendaCtrl.rendercitas = (req, res) => {
    res.send('Todas las citas');
};

//Función para editar citas
agendaCtrl.editcitas = (req, res) =>{
    res.send('Editar Citas');
}

agendaCtrl.updatecita = (req, res) =>{
    res.send('Actualizar cita');
}

//Función de eliminar cita
agendaCtrl.deletecita = (req, res) =>{
    res.send('Eliminar cita');
}

// Exportaciones
module.exports = agendaCtrl;