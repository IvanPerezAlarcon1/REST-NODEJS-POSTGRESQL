//en este archivo definimos las rutas que tendrá nuestro servidor
const {Router} = require('express');
const router = Router(); //Router es un objeto que permite guardar las rutas de mi servidor

const {getUsers, getUserById,createUser,deleteUser} = require('../controllers/index.controller')

router.get('/users', getUsers);
router.get('/users/:id', getUserById); //con :id, es como decirle que aquí va un parámetro
router.post('/users', createUser);
router.delete('/users/:id', deleteUser);

module.exports = router;//podemos exportar este archivo