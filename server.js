'use strict';

var Hapi = require('hapi');
var Good = require('good');
var Logs = require('./log/logs');

var server = new Hapi.Server(3100);

server.route({
	'method' : 'GET',
	'path' : '/',
	'handler' : function (request, reply) {
		reply('Hello, world!');
	}
});

server.pack.register({
	'plugin' : Good,
	'options' : Logs
}, function (error) {
	if (!error) {
		server.start(function () {
			server.log('info', 'Server running at: ' + server.info.uri);
		});
	}
});

module.exports = server;