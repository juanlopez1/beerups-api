const mongoose = require('mongoose');
const {every} = require('lodash');

const pkg = require('../../package');

const generateStatus = dependencies => ({
    deps: dependencies,
    name: pkg.name,
    status: every(dependencies, dependency => dependency.status === 'ok') ? 'ok' : 'down'
});

class StatusService {
    static getStatus() {
        return generateStatus([
            StatusService.getMongoDBStatus()
        ]);
    }

    static getMongoDBStatus() {
        return {
            name: 'MongoDB',
            status: mongoose.connection.readyState === 1 ? 'ok' : 'down'
        };
    }
}

module.exports = StatusService;
