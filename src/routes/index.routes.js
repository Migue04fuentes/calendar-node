const {Router} = require('express');
const app = require('../server');
const router = Router();


router.get('/', (req,res) =>{
    res.render('index');
})



// Exportaciones
module.exports = router;