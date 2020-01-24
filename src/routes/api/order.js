const {OrderController} = require('../../controllers');

module.exports = router => {
    router.get('/:id', OrderController.fetchOne);
    router.post('/create', OrderController.create);
    router.put('/edit/:id', OrderController.edit);
    router.put('/disable/:id', OrderController.disable);
    return router;
};
