// Función para validación de usuarios al ingresar a rutas
const helpers = {};

helpers.isAuthenticated = (req, res, next) => {
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/');
}

module.exports = helpers;