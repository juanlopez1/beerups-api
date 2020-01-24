const {ObjectId} = require('mongoose').Types;

const {OrderService} = require('../services');

class OrderController {
    static async create(req, res, next) {
        try {
            res.send({});
        } catch (err) {
            next({err});
        }
    }

    static async disable(req, res, next) {
        try {
            res.send({});
        } catch (err) {
            next({err});
        }
    }

    static async edit(req, res, next) {
        try {
            res.send({});
        } catch (err) {
            next({err});
        }
    }

    static async fetchOne(req, res, next) {
        try {
            res.send(
                await OrderService.fetchOne({_id: ObjectId(req.params.id)})
            );
        } catch (err) {
            next({err});
        }
    }
}

module.exports = OrderController;
