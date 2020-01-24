const dotenv = require('dotenv');

const env = dotenv.config();
process.env = env.parsed;

const app = require('./src');
const {logger} = require('./src/helpers');

const {NODE_ENV, PORT} = process.env;

app.listen(PORT, () => logger.info(`Started at port ${PORT} in ${NODE_ENV} environment...`));
