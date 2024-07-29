const { getPacientesDB, addPacienteDB,
    updatePacienteDB, deletePacienteDB, getPacientePorIdDB }
    = require('../usecases/pacienteUseCases');

const getPacientes = async (request, response) => {
    await getPacientesDB()
        .then(data => response.status(200).json(data))
        .catch(err => response.status(400).json({
            status: 'error',
            message: 'Erro ao consultar os pacientes: ' + err
        }));
}

const addPaciente = async (request, response) => {
    await addPacienteDB(request.body)
        .then(data => response.status(200).json({
            status: 'success', message: 'Paciente criado',
            objeto: data
        }))
        .catch(err => response.status(400).json({
            status: 'error',
            message: err
        }));
}

const updatePaciente = async (request, response) => {
    await updatePacienteDB(request.body)
        .then(data => response.status(200).json({
            status: 'success', message: 'Paciente alterado',
            objeto: data
        }))
        .catch(err => response.status(400).json({
            status: 'error',
            message: err
        }));
}

const deletePaciente = async (request, response) => {
    await deletePacienteDB(request.params.id)
        .then(data => response.status(200).json({
            status: 'success', message: data
        }))
        .catch(err => response.status(400).json({
            status: 'error',
            message: err
        }));
}

const getPacientePorId = async (request, response) => {
    await getPacientePorIdDB(request.params.id)
        .then(data => response.status(200).json(data))
        .catch(err => response.status(400).json({
            status: 'error',
            message: err
        }));
}

module.exports = {
    getPacientes, addPaciente,
    updatePaciente, deletePaciente, getPacientePorId
}