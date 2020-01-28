const {User} = require('../model');

class UserService {
    static fetch(filter) {
        return User.find({...filter, disable: false}, {password: 0, role: 0, disable: 0}).lean().exec();
    }

    static fetchOne(filter) {
        return User.findOne(filter).lean().exec();
    }
}

module.exports = UserService;
