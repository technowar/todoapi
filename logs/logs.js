'use strict';

var Good = require('good');

//Logs `ops`, `request`, `log`, and `error` with `60 seconds` interval

exports.options = {
	'opsInterval' : 60000,
	'reporters' : [{
		'reporter' : Good.GoodConsole
	}, {
		'reporter' : Good.GoodFile,
		'args' : ['./logs/logs/serverlogs', {
			'events' : {
				'ops' : ['request', 'log', 'error', 'ops']
			},

			'maxFileSize' : 1048576,
			'format' : 'DD/MMM/YYYY:H:mm:ss Z'
		}]
	}]
};
