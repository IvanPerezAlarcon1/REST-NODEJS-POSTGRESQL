//en este archivo definimos las rutas que tendrá nuestro servidor
const {Router} = require('express');
const router = Router(); //Router es un objeto que permite guardar las rutas de mi servidor

router.get('/users',(req,res) => {
    res.send('Hello users');
})

module.exports = router;//podemos exportar este archivo