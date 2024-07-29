const request = require('supertest');
const api = "http://localhost:3002";

describe('Usuarios', function () {
    it('POST /login', () => {
        request(api)
            .post('/login')
            .send({
                email: "gabriellebrambilla@gmail.com",
                senha: "123456",
            })
            .expect(200)
            .then(response => {
                console.log("Token recebido para o Teste 1: " + response._body.token);
                expect(response._body.auth).toEqual("true");
            });
    });

    it('Dados inválidos /login', () => {
        request(api)
            .post('/login')
            .send({
                email: "gabriellebrambilla@gmail.com",
                senha: "000000",
            })
            .expect(401)
            .then(response => {
                console.log("Resposta da autenticação para o Teste 2: " + response._body.auth);
                expect(response._body.auth).toEqual("false");
            });
    });
});