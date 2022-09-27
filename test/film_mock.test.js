const Films = require('../src/application/film_service');
const Constants = require('../src/utils/constants');
const Utils = require('../src/utils/utils');
const FilmsRepository = require('../src/port/film_repository');

jest.mock('../src/port/film_repository');

it('CREATE - Filme válido', async () => {
    const data = {
        nome: "Jurassic World Domínio",
        genero: "Ação e Aventura",
        atores: ["Chris Pratt", "Bryce Dallas Howard", "Laura Dern", "Jeff Goldblum", "Sam Neill"],
        ano: 2022
    }
    data.id = Utils.generateUuid();

    FilmsRepository.create.mockResolvedValue(data);

    const result = await Films.create(data);
    expect(result).toEqual(data);
})

it('CREATE - Filme sem um campo obrigatório (nome)', async () => {
    const data = {
        genero: "Ação e Aventura",
        atores: ["Chris Pratt", "Bryce Dallas Howard", "Laura Dern", "Jeff Goldblum", "Sam Neill"],
        ano: 2022
    }
    data.id = Utils.generateUuid();

    FilmsRepository.create.mockResolvedValue(data);

    const result = await Films.create(data);
    expect(result).toEqual(Constants.ErrorValidation);
})

it('CREATE - Filme sem um campo não obrigatório (atores)', async () => {
    const data = {
        nome: "Jurassic World Domínio",
        genero: "Ação e Aventura",
        ano: 2022
    }
    data.id = Utils.generateUuid();

    FilmsRepository.create.mockResolvedValue(data);

    const result = await Films.create(data);
    expect(result).toEqual(data);
})

it('CREATE - Filme com um campo inválido (ano como String)', async () => {
    const data = {
        genero: "Ação e Aventura",
        atores: ["Chris Pratt", "Bryce Dallas Howard", "Laura Dern", "Jeff Goldblum", "Sam Neill"],
        ano: "Dois mil e vinte e dois"
    }
    data.id = Utils.generateUuid();

    FilmsRepository.create.mockResolvedValue(data);

    const result = await Films.create(data);
    expect(result).toEqual(Constants.ErrorValidation);
})

it('CREATE - Filme duplicado', async () => {
    const data = {
        nome: "Jurassic World Domínio",
        genero: "Ação e Aventura",
        atores: ["Chris Pratt", "Bryce Dallas Howard", "Laura Dern", "Jeff Goldblum", "Sam Neill"],
        ano: 2022
    }
    data.id = Utils.generateUuid();

    FilmsRepository.create.mockResolvedValue({ code: 11000 });

    const result = await Films.create(data);
    expect(result).toEqual(Constants.ErrorDuplicate);
})
