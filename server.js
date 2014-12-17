'use strict';

var Hapi = require('hapi');
var Mongoose = require('mongoose');

var Server = new Hapi.Server();

Server.connection({
	'port' : 3100,
	'routes' : {
		'cors' : true
	}
});

Mongoose.connect('mongodb://localhost/tasks');

require('./db');

Server.register([{
	'register' : require('good'),
	'options' : require('./log/')
}, {
	'register' : require('./api')
}, {
	'register' : require('lout')
}], function (error) {
	if (!error) {
		Server.start(function () {
			Server.log('info', 'Server running at ' + Server.info.uri);
		});
	}
});

module.exports = Server;
