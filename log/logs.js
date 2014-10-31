'use strict';

var Good = require('good');

//Logs `ops`, `request`, `log`, and `error` with `60 seconds` interval

exports.options = {
	'opsInterval' : 60000,
	'reporters' : [{
		'reporter' : Good.GoodConsole,
		'args' : [{
			'events' : {
				'requests' : '*',
				'log' : '*',
				'error' : '*'
			}
		}]
	}, {
		'reporter' : Good.GoodFile,
		'args' : ['./log/logs/logs', {
			'events' : {
				'requests' : '*',
				'log' : '*',
				'error' : '*'
			},

			'maxFileSize' : 1024 * 1024,
			'format' : 'DD/MMM/YYYY:H:mm:ss Z'
		}]
	}]
};
