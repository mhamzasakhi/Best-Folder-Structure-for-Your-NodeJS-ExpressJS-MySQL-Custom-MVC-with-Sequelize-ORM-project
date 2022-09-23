function ClientError(code = 'client_error', error = {}) {
	this.name = 'ClientError';
	this.message = error.message || 'Client Error';
	Error.call(this, error.message);
	Error.captureStackTrace(this, this.constructor);
	this.code = code;
	this.status = error.status || 400;
	this.inner = error;
}

ClientError.prototype = Object.create(Error.prototype);
ClientError.prototype.constructor = ClientError;

module.exports = ClientError;
