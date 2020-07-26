//en este archivo definimos las rutas que tendrá nuestro servidor
const {Router} = require('express');
const router = Router(); //Router es un objeto que permite guardar las rutas de mi servidor

const {getUsers, getUserById,createUser,deleteUser, updateUser} = require('../controllers/index.controller')

router.get('/users', getUsers); //listar todos los registros
router.get('/users/:id', getUserById); //con :id, es como decirle que aquí va un parámetro
router.post('/users', createUser); //crear dato
router.put('/users/:id',updateUser); //actualizar dato segun id
router.delete('/users/:id', deleteUser); //borrar registro segun id

module.exports = router;//podemos exportar este archivo