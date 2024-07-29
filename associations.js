const Usuario = require('./models/usuarioModel');
const Paciente = require('./models/pacienteModel');
const Consulta = require('./models/consultaModel');

Paciente.belongsTo(Usuario, { foreignKey: 'tutor', as: 'tutor_paciente' });
Consulta.belongsTo(Paciente, { foreignKey: 'paciente', as: 'paciente_consulta' });