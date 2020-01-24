const {Router} = require('express');

const {StatusController} = require('../controllers');
const makeApi = require('./api');

const configureRouter = app => {
    app.get('/ping', StatusController.ping);
    app.get('/ready', StatusController.getStatus);
    app.use('/api', makeApi(Router()));
};

module.exports = configureRouter;
