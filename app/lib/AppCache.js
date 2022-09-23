var NodeCache = require('node-cache');

const defaultOptions = {
	useClones: false,
	stdTTL: 60,
};

module.exports = function (options = defaultOptions) {
	options = Object.assign({}, defaultOptions, options);
	let cache = new NodeCache(options);
	//TODO cache
	return cache;
};
