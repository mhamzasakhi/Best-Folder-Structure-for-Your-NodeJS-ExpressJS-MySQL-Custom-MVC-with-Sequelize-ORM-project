const Joi = require('@hapi/joi');
module.exports = {
	Login: function (object) {
		const schema = Joi.object().keys({
			username: Joi.string().required(),
			password: Joi.string().min(6).required(),
		});
		let validation = Joi.validate(object, schema);
		if (validation.error !== null) {
			throw new Error('Validation Error', validation.error.details[0]);
		}
	},
};
