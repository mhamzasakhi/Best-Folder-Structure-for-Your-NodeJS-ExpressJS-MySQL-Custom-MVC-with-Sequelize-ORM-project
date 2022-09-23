const router = require('express').Router();
// user routes
router.use(require('./user/module1.routes'));
router.use(require('./user/module2.routes'));

// admin routes
router.use(require('./admin/module1.routes'));
router.use(require('./admin/module2.routes'));

//your new folder or module

router.use('/', function (req, res, next) {
	res.statusMessage = "Route don't found";
	res.status(404).end();
});
module.exports = router;
