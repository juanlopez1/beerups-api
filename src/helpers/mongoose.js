const {MONGODB_URI} = process.env;
const mongoose = require('mongoose');

const logger = require('./logger');

const MONGODB_CONNECTION_OPTIONS = ({
    useNewUrlParser: true,
    useUnifiedTopology: true
});

class Mongoose {
    static formatConnection(connection) {
        return `${connection.host}:${connection.port}/${connection.db.databaseName}`;
    }

    static configure() {
        mongoose.Promise = Promise;
        mongoose.connect(MONGODB_URI, MONGODB_CONNECTION_OPTIONS);

        mongoose.connection.once('open', () => logger.info(
            `Mongoose connected to ${Mongoose.formatConnection(mongoose.connection)}`
        ));

        mongoose.connection.on('close', () => logger.info('Connection closed'));
        mongoose.connection.on('error', err => {
            logger.error(`Connection error: ${err.stack}`);
            process.exit(1);
        });
    }
}

module.exports = Mongoose;
