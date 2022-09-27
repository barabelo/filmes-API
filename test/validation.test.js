const Constants = require('../src/utils/constants');
const Validation = require('../src/utils/validation');

it('Criar filme válido', () => {
    const result = Validation.create({
        nome: "Jurassic World Domínio",
        genero: "Ação e Aventura",
        atores: ["Chris Pratt", "Bryce Dallas Howard", "Laura Dern", "Jeff Goldblum", "Sam Neill"],
        ano: 2022
    });
    expect(result).toEqual(undefined);
});

it('Criar filme sem parâmetro obrigatório (nome)', () => {
    const result = Validation.create({
        genero: "Ação e Aventura",
        atores: ["Chris Pratt", "Bryce Dallas Howard", "Laura Dern", "Jeff Goldblum", "Sam Neill"],
        ano: 2022
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});

it('Criar filme com um parâmetro inválido (ano como string)', () => {
    const result = Validation.create({
        genero: "Ação e Aventura",
        atores: ["Chris Pratt", "Bryce Dallas Howard", "Laura Dern", "Jeff Goldblum", "Sam Neill"],
        ano: 'Dois mil e vinte e dois'
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});
