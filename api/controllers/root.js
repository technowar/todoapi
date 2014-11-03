'use strict';

module.exports = [{
	'method' : '*',
	'path' : '/{p*}',
	'config' : {
		'handler' : function (request, reply) {
			reply('Page not found')
				.code(404);
		},
		'plugins' : {
			'lout' : false
		}
	}
}, {
	'method' : 'GET',
	'path' : '/',
	'handler' : function (request, reply) {
		reply('Hello, world!')
			.code(200);
	}
}];
