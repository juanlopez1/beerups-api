const {MeetupController} = require('../../controllers');

module.exports = router => {
    router.get('/list/:date?', MeetupController.fetchMany);
    router.get('/:id', MeetupController.fetchOne);
    router.post('/create', MeetupController.create);
    router.put('/edit/:id', MeetupController.edit);
    router.put('/disable/:id', MeetupController.disable);
    return router;
};
