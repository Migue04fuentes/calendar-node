const indexCtrl = {};

//Renderizamiento
indexCtrl.renderIndex = (req, res) => {
    res.render('index');
};

indexCtrl.newagenda = (req, res) => {
    console.log(req.body);
    res.send('newagenda');
};

// Exportaciones
module.exports = indexCtrl;