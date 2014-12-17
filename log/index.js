'use strict';

module.exports = {
	'opsInterval' : 1000,
	'logRequestHeaders' : true,
	'logRequestPayload' : true,
	'logResponsePayload' : true,
	'reporters' : [{
		'reporter' : require('good-console'),
		'format' : 'DD/MMM/YYYY:H:mm:ss Z',
		'args' : [{
			'log' : '*',
			'response' : '*',
			'error' : '*'
		}]
	}, {
		'reporter' : require('good-file'),
		'format' : 'DD/MMM/YYYY',
		'maxFileSize' : 1024 * 1024,
		'args' : ['./log/logs/logs', {
			'log' : '*',
			'response' : '*',
			'error' : '*'
		}]
	}]
};
