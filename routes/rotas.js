const { Router } = require('express');

const { rotasPacientes } = require('./rotasPacientes');
const { rotasConsultas } = require('./rotasConsultas');
const { login }  = require('../controllers/usuarioControllers');

const rotas = new Router();

rotas.route("/login").post(login);

rotas.use(rotasPacientes);
rotas.use(rotasConsultas);

module.exports = rotas;