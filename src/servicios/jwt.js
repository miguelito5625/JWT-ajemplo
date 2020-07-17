const jwt = require('jwt-simple');
const moment = require('moment');

const servicioJWT = {};

/* Función para crear el token 
    @params user - nombre de usuario para la data del token
*/
servicioJWT.createToken = (user) => {
    let payload = {
        userId: user.id,
        createdAt: moment().unix(),
        expiresAt: moment().add(120, 'seconds').unix() 
    }

    return jwt.encode(payload, process.env.SECRET_KEY);
};

servicioJWT.checkToken = (req, res, next) => {    
    if(!req.headers.authorization){
        return res.status(403).send({
            message: 'Usuario no autorizado'
        });
    }

    var token = null;
    try {
        token = req.headers.authorization.split(" ")[1];      
        // console.log(token);
          
        var payload = payload = jwt.decode(token, process.env.SECRET_KEY);

        // console.log('expirado?');
        // console.log(moment.unix(payload.expiresAt).format("MMMM Do YYYY, h:mm:ss a"));
        // let currentDate = moment().unix();
        // console.log(moment.unix(currentDate).format("MMMM Do YYYY, h:mm:ss a"));
        // console.log(moment.unix(payload.expiresAt).format("MMMM Do YYYY, h:mm:ss a"));
        
        
        if(payload.expiresAt <= moment().unix() ){
            return res.status(401).send({ message: 'El token ha expirado'});
        }
        
        req.user = payload.sub;

        next();
    } catch (error) {
        res.status(403).send({
            message: 'Usuario no autorizado'
        });
    }
};

module.exports = servicioJWT;