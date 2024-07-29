const express = require('express')
const cors = require('cors')
const rotas = require('./routes/rotas')
const { sequelize } = require('./config');

require('./associations');

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())

app.use(rotas)

app.listen(process.env.PORT || 3002, () => {
    console.log("Serviço da API rodando")

    try {
        sequelize.authenticate();
        console.log('Conexão com o BD ocorreu com sucesso');
    } catch (error) {
        console.error('Erro ao conectar com o BD:', error);
    }
})

module.exports = app;