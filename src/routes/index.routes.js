const { Router } = require('express');
const app = require('../server');
const router = Router();

// Importación de funciones del Controllers
const { renderIndex,
        newagenda,
        rendercitas,
      } = require('../controllers/index.controller');

// funciones de rutas
router.get('/', renderIndex);

router.post('/', newagenda);

//Ingreso exitosos en login
router.get('/calendar', newagenda);

router.get('/allcitas', rendercitas);



// Exportaciones
module.exports = router;