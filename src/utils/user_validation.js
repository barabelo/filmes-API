const create = {
    nome: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    genero: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    atores: {
        presence: {
            allowEmpty: false,
        },
        type: 'array',
    },
};

const update = {
    nome: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    atores: {
        presence: {
            allowEmpty: false,
        },
        type: 'array',
    },
};

const get = {
    atores: {
        presence: {
            allowEmpty: false,
        },
        type: 'array',
    },
};

const deleteBy = {
    atores: {
        presence: {
            allowEmpty: false,
        },
        type: 'array',
    },
};

module.exports = {
    update,
    create,
    get,
    deleteBy,
};