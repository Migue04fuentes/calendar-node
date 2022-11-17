const { Router } = require('express');
const router = Router();

//Importación de Funciones
const {
    agendaform,
    newcita,
    rendercitas,
    editcitas,
    updatecita,
    deletecita 
} = require('../controllers/agenda.controller');

const {isAuthenticated} = require('../helpers/auth');

//Agregar cita
router.get('/calendar',isAuthenticated, agendaform);

router.post('/newcita', newcita);

//mostrar todas la citas
router.get('/agenda', isAuthenticated, rendercitas);

//Editar Citas
router.get('/agenda/edit/:id', editcitas); 

router.put('/agenda/edit/:id', updatecita); 

//Eliminar cita
router.delete('/agenda/delete/:id', deletecita);

// Exportaciones
module.exports = router;