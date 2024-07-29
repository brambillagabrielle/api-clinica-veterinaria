const request = require('supertest');
const api = "http://localhost:3002";

let idConsulta = 0, token = '';

describe('Consultas', function () {
    it('POST /login', () => {
        request(api)
            .post('/login')
            .send({
                email: "gabriellebrambilla@gmail.com",
                senha: "123456",
            })
            .expect(200)
            .then(response => {
                token = response._body.token;
                console.log("Token obtido: ", token);
                expect(response._body.auth).toEqual("true");
            });
    });

    it('GET /consulta', () => {
        request(api)
            .get('/consulta')
            .set('authorization', `${token}`)
            .expect(200)
    });

    it('GET /consulta/{id}', () => {
        request(api)
            .get('/consulta/1')
            .set('authorization', `${token}`)
            .expect(200)
            .then(response => {
                expect(response.body.observacoes).toEqual("Castração");
            });
    });

    it("POST /consulta", () => {
        return request(api)
            .post("/consulta")
            .set('authorization', `${token}`)
            .send({
                paciente: 1,
                data: "2024-07-29T10:30:00.000Z",
                realizada: false,
                observacoes: "Teste"
            })
            .expect(200)
            .then(response => {
                idConsulta = response._body.objeto.id;
                return request(api)
                    .get("/consulta")
                    .set('authorization', `${token}`)
                    .query({ id: idConsulta })
                    .expect(200);
            });
    });

    it("UPDATE /consulta", () => {
        return request(api)
            .put(`/consulta`)
            .set('authorization', `${token}`)
            .send({
                id: idConsulta,
                paciente: 1,
                data: "2024-07-29T10:30:00.000Z",
                realizada: true,
                observacoes: "Teste"
            })
            .expect(200);
    });

    it("DELETE /consulta/{id}", () => {
        return request(api)
            .del(`/consulta/${idConsulta}`)
            .set('authorization', `${token}`)
            .expect(200)
            .then(() => {
                return request(api)
                    .del(`/consulta/${idConsulta}`)
                    .set('authorization', `${token}`)
                    .expect(400)
            });
    });
});