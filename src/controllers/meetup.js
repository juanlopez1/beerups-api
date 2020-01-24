const {ObjectId} = require('mongoose').Types;

const {MeetupService} = require('../services');

class MeetupController {
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

    static async fetchMany(req, res, next) {
        try {
            res.send(
                await MeetupService.findByUser(req.user._id)
            );
        } catch (err) {
            next({err});
        }
    }

    static async fetchOne(req, res, next) {
        try {
            res.send(
                await MeetupService.fetchOne({_id: ObjectId(req.params.id)})
            );
        } catch (err) {
            next({err});
        }
    }
}

module.exports = MeetupController;
