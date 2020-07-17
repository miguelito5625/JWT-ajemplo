const usuarioController = {};

usuarioController.obtenerTodos = (req, res) => {
    res.json({
        data: "data",
        status: "ok"
    });
};

module.exports = usuarioController;