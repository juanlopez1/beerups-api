const {Order} = require('../model');

class OrderService {
    static fetchOne(filter) {
        return Order.findOne(filter).lean().exec();
    }
}

module.exports = OrderService;
