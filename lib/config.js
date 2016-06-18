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

	// validate config
	if(config === null || typeof config !== "object" || typeof config === "undefined" || Object.keys(config).length === 0)
	{
		var err = new Error("Invalid config file.");
		callback(err);
	}
	else
	{
		callback(null, config);
	}
};