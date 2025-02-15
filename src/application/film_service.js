const validate = require('validate.js');

const Utils = require('../utils/utils');
const Constants = require('../utils/constants');
const FilmRepository = require('../port/film_repository');
const Constraints = require('../utils/film_validation');
const Validation = require('../utils/validation');

const User = {
    async create(data) {
        try {
            const validation = Validation.create(data);
            if (validation) {
                return validation;
            }

            data.id = Utils.generateUuid();

            const response = await FilmRepository.create(data);

            if (response.code === 11000) {
                return Constants.ErrorDuplicate;
            }
            return response;
        } catch (error) {
            return error;
        }
    },

    async update(data) {
        try {
            const validation = validate.validate(data, Constraints.update);
            if (validation) {
                const response = Constants.ErrorValidation;
                response.message = validation;
                return response;
            }

            const response = await FilmRepository.update(data);

            if (response === []) {
                return Constants.ErrorNotFound;
            }
            return response;
        } catch (error) {
            return error;
        }
    },

    async delete(data) {
        try {
            const validation = validate.validate(data, Constraints.deleteBy);
            if (validation) {
                const response = Constants.ErrorValidation;
                response.message = validation;
                return response;
            }

            return await FilmRepository.delete(data);
        } catch (error) {
            return error;
        }
    },

    async listById(data) {
        try {
            const validation = validate.validate(data, Constraints.get);
            if (validation) {
                const response = Constants.ErrorValidation;
                response.message = validation;
                return response;
            }

            return await FilmRepository.getById(data);
        } catch (error) {
            return error;
        }
    },

    async list() {
        try {
            return await FilmRepository.list();
        } catch (error) {
            return error;
        }
    },
};
module.exports = User;