const Paciente = require('../models/pacienteModel');
const Usuario = require('../models/usuarioModel');

const getPacientesDB = async () => {
    try {
        const pacientes = await Paciente.findAll({
            attributes: ['id', 'nome', 'especie'],
            include: [
                { model: Usuario, as: 'tutor_paciente', attributes: ['nome', 'email'] }
            ]
        })
        return pacientes;
    } catch (err) {
        throw "Erro ao buscar objetos: " + err;
    }
}

const addPacienteDB = async (body) => {
    try {
        const { nome, especie, tutor } = body;
        const paciente = await Paciente.create({
            nome,
            especie,
            tutor
        });
        return paciente;
    } catch (err) {
        throw "Erro ao adicionar objeto: " + err;
    }
}

const updatePacienteDB = async (body) => {
    try {
        const { id, nome, especie, tutor } = body;
        const paciente = await Paciente.update({ nome, especie, tutor }, {
            where: { id }
        });
        if (paciente.length === 0) {
            throw `Nenhum objeto encontrado com o ID ${id} para ser alterado`
        }
        return paciente;
    } catch (err) {
        throw "Erro ao alterar o objeto: " + err;
    }
}

const deletePacienteDB = async (id) => {
    try {
        const deletados = await Paciente.destroy({
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

const getPacientePorIdDB = async (id) => {
    try {
        const paciente = await Paciente.findByPk(id, {
            attributes: ['id', 'nome', 'especie'],
            include: [
                { model: Usuario, as: 'tutor_paciente', attributes: ['nome', 'email'] }
            ]
        });
        if (paciente.length === 0) {
            throw `Nenhum objeto encontrado com o ID ${id} para ser mostrado`
        }
        return paciente;
    } catch (err) {
        throw "Erro ao recuperar: " + err;
    }
}

module.exports = {
    getPacientesDB, addPacienteDB,
    updatePacienteDB, deletePacienteDB, getPacientePorIdDB
}