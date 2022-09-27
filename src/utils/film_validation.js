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
    id: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    nome: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    genero: {
        type: 'string',
    },
    atores: {
        type: 'array',
    },
    ano: {
        type: 'number',
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