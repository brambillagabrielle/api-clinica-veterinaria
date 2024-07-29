const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../config');

class Consulta extends Model {}

Consulta.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        paciente: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        data: {
            type: DataTypes.DATE,
            allowNull: false
        },
        realizada: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        observacoes: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'Consulta',
        tableName: 'consultas',
        timestamps: false
    },
);

module.exports = Consulta;