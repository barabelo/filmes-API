const {FilmModel} = require('../infrastructure/database');
const Constants = require("../utils/constants.js");

const FilmRepository = {
    async create(data) {
        try {
            const model = new FilmModel(data);
            const response = await model.save();
            return response.toObject();
        } catch (e) {
            return e;
        }
    },

    async update(data) {
        try {
            const update = {
                nome: data.nome,
            };
            if (data.atores !== undefined) {
                update.atores = data.atores;
            }
            if (data.genero !== undefined) {
                update.genero = data.genero;
            }
            if (data.ano !== undefined) {
                update.ano = data.ano;
            }

            const options = {new: true};
            const filter = {id: data.id};
            const result = await FilmModel.findOneAndUpdate(filter, update, options).exec();
            if (result === null) return []
            return result.toObject();
        } catch (e) {
            return e;
        }
    },

    async list() {
        try {
            return await FilmModel.find().exec();
        } catch (error) {
            return error;
        }
    },

    async getById(data) {
        try {
            let result = await FilmModel.findOne({nome: data.nome}).exec();
            if (result == null) {
                result = Constants.ErrorNotFound.name;
            }
            return result;
        } catch (e) {
            return e;
        }
    },

    async delete(data) {
        try {
            const result = await FilmModel.deleteOne({id: data.id}).exec();
            return result.deletedCount;
        } catch (error) {
            return error;
        }
    },
};

module.exports = FilmRepository;