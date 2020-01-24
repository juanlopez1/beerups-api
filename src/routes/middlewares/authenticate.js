const {UserService} = require('../../services');

module.exports = async (req, res, next) => {
    try {
        const username = req.get('username');
        const password = req.get('password');

        if (username && password) {
            const user = await UserService.fetchOne({username, password});

            if (user) {
                req.user = user;
                next();
                return;
            }
            res.sendStatus(403);
            return;
        }
        res.sendStatus(401);
    } catch (err) {
        next(err);
    }
};
