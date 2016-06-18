exports = module.exports = {};
exports.getFromFile = function(fileName, callback)
{
	// read config file in root
	var config = require('../' + fileName);

	callback(null, config);
};