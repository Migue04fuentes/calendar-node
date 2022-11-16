const { Router } = require('express');
const app = require('../server');
const router = Router();

// Importación de funciones del Controllers
const { renderIndex,
      } = require('../controllers/index.controller');

// funciones de rutas
router.get('/', renderIndex);








// Exportaciones
module.exports = router;