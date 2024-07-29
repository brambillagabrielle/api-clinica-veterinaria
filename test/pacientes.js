const request = require('supertest');
const api = "http://localhost:3002";

let idPaciente = 0, token = '';

describe('Pacientes', function () {
    before('POST /login', () => {
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

    it('GET /paciente', () => {
        request(api)
            .get('/paciente')
            .set('authorization', `${token}`)
            .expect(200);
    });

    it('GET /paciente/{id}', () => {
        request(api)
            .get('/paciente/1')
            .set('authorization', `${token}`)
            .expect(200)
            .then(response => {
                expect(response.body.nome).toEqual("Princesa");
            });
    });

    it("POST /paciente", () => {
        return request(api)
            .post("/paciente")
            .set('authorization', `${token}`)
            .send({
                nome: "Fofo",
                especie: "R",
                tutor: "joaosilva@gmail.com"
            })
            .expect(200)
            .then(response => {
                idPaciente = response._body.objeto.id;
                return request(api)
                    .get("/paciente")
                    .set('authorization', `${token}`)
                    .query({ id: idPaciente })
                    .expect(200);
            });
    });

    it("UPDATE /paciente", () => {
        return request(api)
            .put(`/paciente`)
            .set('authorization', `${token}`)
            .send({
                id: idPaciente,
                nome: "Fofinho",
                especie: "R",
                tutor: "joaosilva@gmail.com"
            })
            .expect(200);
    });

    it("DELETE /paciente/{id}", () => {
        return request(api)
            .del(`/paciente/${idPaciente}`)
            .set('authorization', `${token}`)
            .expect(200)
            .then(() => {
                return request(api)
                    .del(`/paciente/${idPaciente}`)
                    .set('authorization', `${token}`)
                    .expect(400)
            });
    });
});