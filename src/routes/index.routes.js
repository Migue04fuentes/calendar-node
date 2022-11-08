const { Router } = require('express');
const app = require('../server');
const router = Router();

// Importación de funciones del Controllers
const { renderIndex,
        newagenda,
      } = require('../controllers/index.controller');

// funciones de rutas
router.get('/', renderIndex);

router.post('/index/newagenda', newagenda);



// Exportaciones
module.exports = router;