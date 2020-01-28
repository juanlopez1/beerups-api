const {ObjectId} = require('mongoose').Types;
const {
    concat, map, toString, uniqBy
} = require('lodash');

const UserService = require('../services/user');
const {Meetup} = require('../model');

class MeetupService {
    static async checkIn(id, userId) {
        const meetup = await Meetup.findOne({_id: id}).lean().exec();
        const checkedIn = concat(meetup.checkedIn, userId);
        await Meetup.updateOne({_id: id}, {checkedIn}).lean().exec();
    }

    static async create(data, creator) {
        const meetup = {
            ...data,
            creator,
            _id: ObjectId(),
            participants: map(data.participants, participant => ObjectId(participant._id))
        };
        await Meetup.create(meetup).lean().exec();
    }

    static fetch(filter) {
        return Meetup.find(filter).lean().exec();
    }

    static async fetchOne(filter) {
        const meetup = await Meetup.findOne(filter).lean().exec();
        meetup.participants = await UserService.fetch({_id: {$in: meetup.participants}});
        return meetup;
    }

    static async findByUser(user) {
        const createdByUser = await Meetup.find({creator: user, canceled: false}).lean().exec();
        const participations = await Meetup.find({participants: user, canceled: false}).lean().exec();
        return uniqBy(
            concat(createdByUser, participations), meetup => toString(meetup._id)
        );
    }

    static async update(data) {
        await Meetup.updateOne({_id: ObjectId(data._id)}, data).lean().exec();
    }

    static async participate(id, userId) {
        const meetup = await Meetup.findOne({_id: id}).lean().exec();
        const participants = concat(meetup.participants, userId);
        await Meetup.updateOne({_id: id}, {participants}).lean().exec();
    }
}

module.exports = MeetupService;
