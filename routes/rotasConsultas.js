const { Router } = require('express');

const { verificaJWT } = require('../controllers/usuarioControllers');

const { getConsultas, addConsulta,
    updateConsulta, deleteConsulta, getConsultaPorId }
    = require('../controllers/consultaControllers');

const rotasConsultas = new Router();

rotasConsultas.route('/consulta')
    .get(verificaJWT, getConsultas)
    .post(verificaJWT, addConsulta)
    .put(verificaJWT, updateConsulta)

rotasConsultas.route('/consulta/:id')
    .get(verificaJWT, getConsultaPorId)
    .delete(verificaJWT, deleteConsulta)

module.exports = { rotasConsultas };