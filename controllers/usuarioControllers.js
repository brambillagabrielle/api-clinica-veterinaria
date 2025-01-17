const { autenticaUsuarioDB } = require('../usecases/usuarioUseCases');
require("dotenv-safe").config();
const jwt = require('jsonwebtoken');

const login = async (request, response) => {
    await autenticaUsuarioDB(request.body)
        .then(usuario => {
            const token = jwt.sign(
                { usuario }, process.env.SECRET, {
                expiresIn: 300
            })
            return response.json({
                auth: true,
                token: token
            });
        })
        .catch(err => response.status(401).json({
            auth: false,
            message: err
        }));
}

function verificaJWT(request, response, next) {
    const token = request.headers['authorization'];
    if (!token) return response.status(401).json({
        auth: false,
        message: 'Nenhum token recebido'
    });
    jwt.verify(token, process.env.SECRET, function (err, decoded) {
        if (err) {
            return response.status(401).json({
                auth: false,
                message: 'Erro ao decodificar o token: ' + err
            });
        }
        request.usuario = decoded.usuario;
        next();
    })
}

module.exports = {
    login, verificaJWT
}