const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../config');

class Usuario extends Model {}

Usuario.init(
    {
        email: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        senha: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'Usuario',
        tableName: 'usuarios',
        timestamps: false
    },
);

module.exports = Usuario;