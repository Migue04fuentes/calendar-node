const {Router} = require('express');
const app = require('../server');
const router = Router();

// Importación de funciones del controlador
const {
renderregistro,
saveregistro,
signinform,
signincheck,
logout
} = require('../controllers/user.controller');

// renderizado al formulario
router.get('/registro', renderregistro);

//Guardando registro
router.post('/registrar', saveregistro);

// Renderizar al login
router.get('/login', signinform);

// Verificación de Login
router.post('/login', signincheck);

//Salir de la sesión
router.get('/user/logout', logout);

module.exports = router; 