/* eslint-disable import/no-dynamic-require */
const express = require('express');

const configureMongoose = require(`../config/${process.env.NODE_ENV}`);
const configureRouter = require('./routes');

const app = express();

configureMongoose(app);
configureRouter(app);

module.exports = app;
