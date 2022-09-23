module.exports = function (app) {
	app.use(async function (req, res, next) {
		
		next();
	});
};
