const {User} = require('../model');

class UserService {
    static async fetchOne(filter) {
        return User.findOne(filter).lean().exec();
    }
}

module.exports = UserService;
