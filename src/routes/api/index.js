const {Router} = require('express');
const requireDir = require('require-dir');
const {forEach} = require('lodash');

const logger = require('../../helpers/logger');

const makeApi = router => {
    forEach(
        requireDir('.', {recurse: true}),
        (module, name) => {
            if (process.env.NODE_ENV !== 'test') {
                logger.info(`Loading ${name} api...`);
            }
            router.use(`/${name}`, module(Router()));
        }
    );
    return router;
};

module.exports = makeApi;
