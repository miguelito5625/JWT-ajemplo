const usuarioRoutes = require('express').Router();
const { usuarioController } = require('../controllers/index');


usuarioRoutes.get('/usuarios', usuarioController.obtenerTodos);

module.exports = usuarioRoutes;