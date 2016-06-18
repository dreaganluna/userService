exports = module.exports = {};
exports.getFromFile = function(fileName, callback)
{
	// read config file in root
	try
	{
		var config = require('../' + fileName);
	}
	catch(e)
	{
		var err = new Error("Config file not found.");
		callback(err);
		return;
	}

	callback(null, config);
};