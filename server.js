'use strict';

var Hapi = require('hapi');

var server = new Hapi.Server(3100);

server.pack.register([{
	'plugin' : require('good'),
	'options' : require('./log/').options
}, {
	'plugin' : require('lout'),
}, {
	'plugin' : require('./api')
}], function (error) {
	if (!error) {
		server.start(function () {
			server.log('info', 'Server running at: ' + server.info.uri);
		});
	}
});

module.exports = server;
