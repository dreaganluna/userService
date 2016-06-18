// ================== //
// Requirements       //
// ================== //


var _config = require("../lib/config.js");


describe( "in config", function()
{


	// ================== //
	// getFromFile        //
	// ================== //


	describe( "initializing config", function()
	{
		it('should return a correct config object', function(done)
		{
			_config.getFromFile("config.json", function(err, config)
			{
				// check typing
				expect(err).to.be.an("null");
				expect(config).to.be.an("object");

				// check contents of config
				expect(Object.keys(config).length).to.equal(1);
				config.should.have.a.property("mongo")
					.that.is.an("object")
					.that.has.all.keys('location', 'db', 'collection');
			
				done();
			});
		});
	});
});