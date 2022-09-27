const Film = require('../application/film_service');
const Utils = require('../utils/utils');

const route = '/film';

module.exports = (app) => {
    app.post(`${route}/create`, async (req, res) => {
        const response = await Film.create(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
    app.put(`${route}/update`, async (req, res) => {
        const response = await Film.update(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
    app.get(`${route}/list`, async (req, res) => {
        const response = await Film.list();
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
    app.patch(`${route}/listFilm`, async (req, res) => {
        const response = await Film.listById(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
    app.delete(`${route}/delete`, async (req, res) => {
        const response = await Film.delete(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
};