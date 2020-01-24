const {Meetup} = require('../model');

class MeetupService {
    static fetchOne(filter) {
        return Meetup.findOne(filter).lean().exec();
    }

    static findByUser(user) {
        return Meetup.find({user, canceled: false}).lean().exec();
    }
}

module.exports = MeetupService;
