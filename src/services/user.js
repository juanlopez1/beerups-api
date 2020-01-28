const {User} = require('../model');

class UserService {
    static async fetch(filter) {
        return User.find({...filter, disable: false}, {password: 0, role: 0, disable: 0}).lean().exec();
    }

    static async fetchOne(filter) {
        return User.findOne(filter).lean().exec();
    }
}

module.exports = UserService;
