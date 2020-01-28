const bcrypt = require('bcrypt');

const {RoleService, UserService} = require('../../services');

module.exports = router => {
    router.get('/login', async (req, res, next) => {
        try {
            const username = req.get('username');
            const password = req.get('password');

            if (username && password) {
                const user = await UserService.fetchOne({username});
                const role = await RoleService.fetchOne({_id: user.role});
                const match = await bcrypt.compare(password, user.password);

                if (match) {
                    res.send({
                        _id: user._id,
                        name: user.name,
                        username: user.username,
                        role: {
                            value: role._id,
                            name: role.name
                        }
                    });
                    return;
                }
            }
            res.sendStatus(403);
        } catch (err) {
            next(next);
        }
    });
    return router;
};
