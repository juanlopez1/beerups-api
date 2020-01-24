const bodyParser = require('body-parser');
const morgan = require('morgan');

const {Mongoose} = require('../src/helpers');

const configureMongoose = app => {
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(morgan('dev'));
    Mongoose.configure();
};

module.exports = configureMongoose;
