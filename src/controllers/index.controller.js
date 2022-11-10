const indexCtrl = {};

// importando modelo
const agenda = require('../models/agendas');

//Renderizamiento
indexCtrl.renderIndex = (req, res) => {
    res.render('index');
};

//Guardar cita
indexCtrl.newagenda = async (req, res) => {
    res.render('calendario/calendar');
};

//mostrando citas
indexCtrl.rendercitas = async(req, res) => {
    const citas = await agenda.find();
    res.send(citas);
}

// Exportaciones
module.exports = indexCtrl;