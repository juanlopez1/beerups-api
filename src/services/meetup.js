const {concat} = require('lodash');

const {Meetup} = require('../model');

class MeetupService {
    static fetch(filter) {
        return Meetup.find(filter).lean().exec();
    }

    static fetchOne(filter) {
        return Meetup.findOne(filter).lean().exec();
    }

    static async findByUser(user) {
        const createdByUser = await Meetup.find({creator: user, canceled: false}).lean().exec();
        const participations = await Meetup.find({participants: {$in: user}, canceled: false}).lean().exec();
        return concat(createdByUser, participations);
    }
}

module.exports = MeetupService;
