'use strict';

module.exports = [{
	'method' : 'GET',
	'path' : '/v1/tasks',
	'handler' : function (request, reply) {
		reply('Tasks')
			.code(200);
	}
}];
