const {ObjectId} = require('mongoose').Types;
const {
    concat, map, toString, uniqBy
} = require('lodash');

const UserService = require('../services/user');
const {Meetup} = require('../model');

class MeetupService {
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

    static async create(data, creator) {
        await Meetup.create({
            ...data,
            creator,
            _id: ObjectId(),
            participants: map(data.participants, participant => ObjectId(participant._id))
        }).lean().exec();
    }

    static async update(data) {
        await Meetup.updateOne({_id: ObjectId(data._id)}, data).lean().exec();
    }
}

module.exports = MeetupService;
