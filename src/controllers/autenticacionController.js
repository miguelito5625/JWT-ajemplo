const autenticacionController = {};
const servicioJWT = require('../servicios/jwt');

autenticacionController.login = (req, res) => {
    console.log(req.body);
    const user = {
        id: 1,
        username: 'mike',
        password: '123456'
    }
    res.json({
        message: "Sesion iniciada",
        token: servicioJWT.createToken(user),
        status: "ok"
    });
};

module.exports = autenticacionController;