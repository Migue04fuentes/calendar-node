const {Router} = require('express');
const app = require('../server');
const router = Router();

// Importación de funciones del controlador
const {
renderregistro,
saveregistro
} = require('../controllers/user.controller');

// renderizado al formulario
router.get('/registro', renderregistro);

//Guardando registro
router.post('/registrar', saveregistro);

module.exports = router; 