const autenticacionController = require('../controllers/autenticacionController');

const autenticacionRoutes = require('express').Router();

autenticacionRoutes.post('/login', autenticacionController.login);

module.exports = autenticacionRoutes;