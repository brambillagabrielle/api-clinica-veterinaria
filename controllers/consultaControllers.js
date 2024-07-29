const { getConsultasDB, addConsultaDB,
    updateConsultaDB, deleteConsultaDB, getConsultaPorIdDB }
    = require('../usecases/consultaUseCases');

const getConsultas = async (request, response) => {
    await getConsultasDB()
        .then(data => response.status(200).json(data))
        .catch(err => response.status(400).json({
            status: 'error',
            message: 'Erro ao consultar os consultas: ' + err
        }));
}

const addConsulta = async (request, response) => {
    await addConsultaDB(request.body)
        .then(data => response.status(200).json({
            status: 'success', message: 'Consulta criada',
            objeto: data
        }))
        .catch(err => response.status(400).json({
            status: 'error',
            message: err
        }));
}

const updateConsulta = async (request, response) => {
    await updateConsultaDB(request.body)
        .then(data => response.status(200).json({
            status: 'success', message: 'Consulta alterada',
            objeto: data
        }))
        .catch(err => response.status(400).json({
            status: 'error',
            message: err
        }));
}

const deleteConsulta = async (request, response) => {
    await deleteConsultaDB(request.params.id)
        .then(data => response.status(200).json({
            status: 'success', message: data
        }))
        .catch(err => response.status(400).json({
            status: 'error',
            message: err
        }));
}

const getConsultaPorId = async (request, response) => {
    await getConsultaPorIdDB(request.params.id)
        .then(data => response.status(200).json(data))
        .catch(err => response.status(400).json({
            status: 'error',
            message: err
        }));
}

module.exports = {
    getConsultas, addConsulta,
    updateConsulta, deleteConsulta, getConsultaPorId
}