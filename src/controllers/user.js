const {UserService} = require('../services');

class UserController {
    static async fetchMany(req, res, next) {
        try {
            res.send(
                await UserService.fetch({})
            );
        } catch (err) {
            next({err});
        }
    }
}

module.exports = UserController;
