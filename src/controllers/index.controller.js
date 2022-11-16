const indexCtrl = {};

// importando modelo
const agenda = require('../models/agendas');

//Renderizamiento
indexCtrl.renderIndex = (req, res) => {
    res.render('index');
};

// Exportaciones
module.exports = indexCtrl;