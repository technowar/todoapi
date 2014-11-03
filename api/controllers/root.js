'use strict';

module.exports = [{
	'method' : '*',
	'path' : '/{p*}',
	'handler' : function (request, reply) {
		reply('Page not found')
			.code(404);
	}
}, {
	'method' : 'GET',
	'path' : '/',
	'handler' : function (request, reply) {
		reply('Hello, world!')
			.code(200);
	}
}];
