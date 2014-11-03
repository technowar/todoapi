'use strict';

module.exports = [{
	'method' : 'GET',
	'path' : '/tasks',
	'handler' : function (request, reply) {
		reply('Tasks')
			.code(200);
	}
}];
