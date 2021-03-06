const {ObjectId} = require('mongoose').Types;

const {MeetupService} = require('../services');

class MeetupController {
    static async checkIn(req, res, next) {
        try {
            await MeetupService.checkIn(ObjectId(req.params.id), ObjectId(req.user._id));
            res.sendStatus(200);
        } catch (err) {
            next({err});
        }
    }

    static async create(req, res, next) {
        try {
            await MeetupService.create(req.body, ObjectId(req.user._id));
            res.sendStatus(200);
        } catch (err) {
            next({err});
        }
    }

    static async edit(req, res, next) {
        try {
            await MeetupService.update(req.body);
            res.sendStatus(200);
        } catch (err) {
            next({err});
        }
    }

    static async fetchByUser(req, res, next) {
        try {
            res.send(
                await MeetupService.findByUser(ObjectId(req.user._id))
            );
        } catch (err) {
            next({err});
        }
    }

    static async fetchByDate(req, res, next) {
        try {
            res.send(
                await MeetupService.fetch({date: req.params.date})
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

    static async participate(req, res, next) {
        try {
            await MeetupService.participate(ObjectId(req.params.id), ObjectId(req.user._id));
            res.sendStatus(200);
        } catch (err) {
            next({err});
        }
    }
}

module.exports = MeetupController;
