const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../config');

class Paciente extends Model {}

Paciente.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        especie: {
            type: DataTypes.CHAR,
            allowNull: false
        },
        tutor: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'Paciente',
        tableName: 'pacientes',
        timestamps: false
    },
);

module.exports = Paciente;