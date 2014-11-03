'use strict';

var Good = require('good');

//Logs `request`, `log`, and `error` with `60 seconds` opsInterval

module.exports = {
	'opsInterval' : 60000,
	'reporters' : [{
		'reporter' : Good.GoodConsole,
		'args' : [{
			'events' : {
				'request' : '*',
				'log' : '*',
				'error' : '*'
			}
		}]

			/*****************************
			 * GoodFile, uncomment later *
			 *****************************/

/******************************************
	}, {
		'reporter' : Good.GoodFile,
		'args' : ['./log/logs/logs', {
			'events' : {
				'request' : '*',
				'log' : '*',
				'error' : '*'
			},

			'maxFileSize' : 1024 * 1024,
			'format' : 'DD/MMM/YYYY:H:mm:ss Z'
		}]
******************************************/

	}]
};
