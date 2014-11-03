'use strict';

var Hapi = require('hapi');
var Mongoose = require('mongoose');

var MongoUrl = 'mongodb://localhost/tasks';
var Server = new Hapi.Server(3100);

Mongoose.connect(MongoUrl);

Server.pack.register([{
	'plugin' : require('good'),
	'options' : require('./log/').options
}, {
	'plugin' : require('lout'),
}, {
	'plugin' : require('./api')
}], function (error) {
	if (!error) {
		Server.start(function () {
			Server.log('info', 'Server running at: ' + Server.info.uri);
		});
	}
});

module.exports = Server;
