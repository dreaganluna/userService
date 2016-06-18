var init = function()
{
	Config.getFromFile('config.json', function(err, config)
	{
		if(err)
		{
			winston.error(err);
			process.exit(-1);
		}

		_config = config;
		winston.info("userService started with this config: ", JSON.stringify(_config));
	});
};


// INIT winston
var winston = require('./lib/logger.js')('userService');


// INIT config
var _config;
var Config = require("./lib/config.js");
init();