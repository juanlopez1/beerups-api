const {ObjectId} = require('mongoose').Types;
const {isNil} = require('lodash');

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
            const {date} = req.params;

            if (isNil(date)) {
                res.send(
                    await MeetupService.findByUser(ObjectId(req.user._id))
                );
            } else {
                res.send(
                    await MeetupService.fetch({date})
                );
            }
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
