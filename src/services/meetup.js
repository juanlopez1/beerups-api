const {Meetup} = require('../model');

class MeetupService {
    static fetchOne(filter) {
        return Meetup.findOne(filter).lean().exec();
    }
}

module.exports = MeetupService;
