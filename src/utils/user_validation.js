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
        type: 'array',
    },
    ano: {
        presence: {
            allowEmpty: false,
        },
        type: 'number',
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
    nome: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

module.exports = {
    update,
    create,
    get,
    deleteBy,
};