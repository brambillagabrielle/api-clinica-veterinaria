const { Sequelize } = require('sequelize');

const isProduction = process.env.NODE_ENV === 'production';

let sequelize = null;

if (isProduction) {
    sequelize = new Sequelize(
        process.env.DATABASE_URL
    );
} else {
    sequelize = new Sequelize(
        'bdclinicaveterinaria', 
        'postgres', 
        'postgres', {
        dialect: 'postgres',
        host: 'localhost',
        port: 5432
    });
}

module.exports = { sequelize };