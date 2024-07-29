const Consulta = require('../models/consultaModel');
const Paciente = require('../models/pacienteModel');

const getConsultasDB = async () => {
    try {
        const consultas = await Consulta.findAll({
            attributes: ['id', 'data', 'realizada', 'observacoes'],
            include: [
                { model: Paciente, as: 'paciente_consulta', attributes: ['nome', 'especie'] }
            ]
        })
        return consultas;
    } catch (err) {
        throw "Erro ao buscar objetos: " + err;
    }
}

const addConsultaDB = async (body) => {
    try {
        const { paciente, data, realizada, observacoes } = body;
        const consulta = await Consulta.create({
            paciente,
            data,
            realizada,
            observacoes
        });
        return consulta;
    } catch (err) {
        throw "Erro ao adicionar objeto: " + err;
    }
}

const updateConsultaDB = async (body) => {
    try {
        const { id, paciente, data, realizada, observacoes } = body;
        const consulta = await Consulta.update({ paciente, data, realizada, observacoes }, {
            where: { id }
        });
        if (consulta.length === 0) {
            throw `Nenhum objeto encontrado com o ID ${id} para ser alterado`
        }
        return consulta;
    } catch (err) {
        throw "Erro ao alterar o objeto: " + err;
    }
}

const deleteConsultaDB = async (id) => {
    try {
        const deletados = await Consulta.destroy({
            where: { id }
        });
        if (deletados === 0) {
            throw `Nenhum objeto encontrado com o ID ${id} para ser removido`
        } else {
            return "Objeto removido com sucesso";
        }
    } catch (err) {
        throw "Erro ao remover o objeto: " + err;
    }
}

const getConsultaPorIdDB = async (id) => {
    try {
        const consulta = await Consulta.findByPk(id, {
            attributes: ['id', 'data', 'realizada', 'observacoes'],
            include: [
                { model: Paciente, as: 'paciente_consulta', attributes: ['nome', 'especie'] }
            ]
        });
        if (consulta.length === 0) {
            throw `Nenhum objeto encontrado com o ID ${id} para ser mostrado`
        }
        return consulta;
    } catch (err) {
        throw "Erro ao recuperar: " + err;
    }
}

module.exports = {
    getConsultasDB, addConsultaDB,
    updateConsultaDB, deleteConsultaDB, getConsultaPorIdDB
}