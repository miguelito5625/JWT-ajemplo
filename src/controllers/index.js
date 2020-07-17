const rootController = {};
const usuarioController = require('./usuarioController');

rootController.rootApi = (req, res) => {    
    res.json({
        message: "Bienvenido",
        status: "ok"
    });
}

module.exports = {
    rootController,
    usuarioController
}