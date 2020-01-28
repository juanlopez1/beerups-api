const {UserController} = require('../../controllers');

module.exports = router => {
    router.get('/list', UserController.fetchMany);
    return router;
};
