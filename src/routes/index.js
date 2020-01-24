const {Router} = require('express');

const {StatusController} = require('../controllers');
const {authenticate} = require('./middlewares');
const makeApi = require('./api');

const configureRouter = app => {
    app.get('/ping', StatusController.ping);
    app.get('/ready', StatusController.getStatus);
    app.use('/api', authenticate, makeApi(Router()));
};

module.exports = configureRouter;
