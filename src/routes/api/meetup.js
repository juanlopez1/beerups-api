const {MeetupController} = require('../../controllers');

module.exports = router => {
    router.get('/list', MeetupController.fetchByUser);
    router.get('/list/:date', MeetupController.fetchByDate);
    router.get('/:id', MeetupController.fetchOne);
    router.post('/create', MeetupController.create);
    router.put('/edit/:id', MeetupController.edit);
    router.put('/check-in/:id', MeetupController.checkIn);
    router.put('/participate/:id', MeetupController.participate);
    return router;
};
