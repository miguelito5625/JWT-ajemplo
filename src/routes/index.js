const routes = require('express').Router();
const usuarioRoutes = require('./usuarioRoutes');
const { rootController } = require('../controllers');
const autenticacionRoutes = require('./autenticacionRoutes');
const servicioJWT = require('../servicios/jwt');

routes.get('/', rootController.rootApi);

routes.use(autenticacionRoutes);

routes.use(servicioJWT.checkToken);
routes.use(usuarioRoutes);

module.exports = routes;