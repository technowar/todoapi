'use strict';

var Hapi = require('hapi');
var Good = require('good');
var Logs = require('./logs/logs');

var server = new Hapi.Server('127.0.0.1', 3100);

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