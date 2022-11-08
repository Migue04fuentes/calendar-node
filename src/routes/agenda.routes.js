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


//Agregar cita
router.get('/agenda/add', agendaform);

router.post('/agenda/add-cita', newcita);

//mostrar todas la citas
router.get('/agenda', rendercitas);

//Editar Citas
router.get('/agenda/edit/:id', editcitas); 

router.put('/agenda/edit/:id', updatecita); 

//Eliminar cita
router.delete('/agenda/delete/:id', deletecita);

// Exportaciones
module.exports = router;