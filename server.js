'use strict';

var Hapi = require('hapi');
var Good = require('good');
var Logs = require('./logs/logs');

var server = new Hapi.Server(3100);

server.route({
	method : 'GET',
	path   : '/',

	handler: function (request, reply) {
		reply('Hello, world!');
	}
});

server.pack.register({
	'plugin'  : Good,
	'options' : Logs.options
}, function (error) {
	if (!error) {
		server.start(function () {
			console.log("The server has started on port: " + server.info.port);
		});
	}
});