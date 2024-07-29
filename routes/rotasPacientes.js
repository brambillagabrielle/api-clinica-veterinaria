const { Router } = require('express');

const { verificaJWT } = require('../controllers/usuarioControllers');

const { getPacientes, addPaciente,
    updatePaciente, deletePaciente, getPacientePorId }
    = require('../controllers/pacienteControllers');

const rotasPacientes = new Router();

rotasPacientes.route('/paciente')
    .get(verificaJWT, getPacientes)
    .post(verificaJWT, addPaciente)
    .put(verificaJWT, updatePaciente)

rotasPacientes.route('/paciente/:id')
    .get(verificaJWT, getPacientePorId)
    .delete(verificaJWT, deletePaciente)

module.exports = { rotasPacientes };