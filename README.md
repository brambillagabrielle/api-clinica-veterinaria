# API para Clínica Veterinária

O trabalho presente neste repositório foi desenvolvido para a disciplina de Serviços Web (SW), com o intuito de realizar a criação e documentação de uma **API REST**. 

Como tema para essa aplicação desenvolvida, foi escolhida a criação de uma API para um sistema de uma **Clínica Veterinária**, que permite a autenticação de usuários e a manutenção dos registros de pacientes e consultas.

## Tecnologias Utilizadas
- `Node.JS`
- `Express.JS` (criação de Serviço Web)
- `PostgreSQL` (SGBD)
- `Sequelize` (ORM)

## Execução local da API

Após realizar o **clone** do repositório, o seguinte comando deve ser utilizado para **instalação de todas as dependências**: `npm i`

Após isso, a execução local em si da API pode ser realizada através de um dos comandos abaixo, utilizando os **scripts definidos no arquivo** `package.json`:

1. `npm start`: a cada alteração, a aplicação terá que ser **parada e executada novamente** com o comando
2. `npm run start:dev`: as alterações vão ser refletidas sem a necessidade de parar a API, para **desenvolvimento**

## Testes da API

Os **testes da API** foram criados utilizando as ferramentas:

- `Supertest` (`Chai` + `Mocha`) para testes automatizados (**internos**)
- `Postman` para testes **externos**, criando requisições para a API

Para **execução dos testes automatizados**, utilizar os comandos:
- `npm run test:pacientes`
- `npm run test:consultas`

Para testar com o Postman, importar a coleção de requisições HTTP do arquivo: [Collection Postman](/ClinicaVeterinaria.postman_collection.json)

## Rotas/Métodos da API

### Paciente

- `/paciente`
    - `GET` - Lista todos os pacientes
    - `POST` - Adiciona um novo paciente (passando os dados pelo body da requisição)
    - `PUT` - Atualiza paciente existente (passando os dados pelo body da requisição, incluíndo o ID)

- `/paciente/{id}`
    - `GET` - Retorna paciente com o ID especificado
    - `DELETE` - Deleta o paciente com o ID especificado

### Consulta

- `/consulta`
    - `GET` - Lista todas as consultas
    - `POST` - Adiciona uma nova consulta (passando os dados pelo body da requisição)
    - `PUT` - Atualiza consulta existente (passando os dados pelo body da requisição, incluíndo o ID)

- `/consulta/{id}`
    - `GET` - Retorna consulta com o ID especificado
    - `DELETE` - Deleta a consulta com o ID especificado

## Códigos de Resposta

- `200` - Sucesso
- `400` - Erro