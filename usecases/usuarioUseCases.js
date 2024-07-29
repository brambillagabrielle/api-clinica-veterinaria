const { pool } = require('../config');
const Usuario = require('../models/usuarioModel');

const autenticaUsuarioDB = async (body) => {
    try {
        const { email, senha } = body;
        const usuario = await Usuario.findAll({
            attributes: ['email', 'nome', 'senha'],
            where: {
                email: email,
                senha: senha,
            }
        });
        if (usuario.length === 0) {
            throw "Usuário ou senha inválidos";
        }
        return new Usuario(usuario.email, usuario.nome);
    } catch(err){
        throw "Erro ao autenticar o usuário: " + err; 
    }
}

module.exports = { autenticaUsuarioDB }