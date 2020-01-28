const {Role} = require('../model');

class RoleService {
    static fetchOne(filter) {
        return Role.findOne(filter).lean().exec();
    }
}

module.exports = RoleService;
