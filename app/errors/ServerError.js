function ServerError(code, error) {
	this.name = 'ServerError';
	this.message = error.message;
	Error.call(this, error.message);
	Error.captureStackTrace(this, this.constructor);
	this.code = code;
	this.status = 500;
	this.inner = error;
}

ServerError.prototype = Object.create(Error.prototype);
ServerError.prototype.constructor = ServerError;

module.exports = ServerError;
