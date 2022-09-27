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
    nome: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const deleteBy = {
    id: {
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