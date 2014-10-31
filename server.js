'use strict';

var Hapi   = require('hapi');
var server = new Hapi.Server('127.0.0.1', 3100);

server.start(function () {
	console.log("The server has started on port: " + server.info.port);
});