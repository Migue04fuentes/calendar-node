const indexCtrl = {};

// importando modelo
const agenda = require('../models/agendas');

//Renderizamiento
indexCtrl.renderIndex = (req, res) => {
    res.render('index');
};

//Guardar cita
indexCtrl.newagenda = async (req, res) => {
    const { namedoctor, description, fecha } = req.body;
    const newagenda = new agenda({ title: namedoctor, description, fecha: fecha });
    await newagenda.save();
    res.render('index');
};

//mostrando citas
indexCtrl.rendercitas = async(req, res) => {
    const citas = await agenda.find();
    res.send(citas);
}

// Exportaciones
module.exports = indexCtrl;