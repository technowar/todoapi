'use strict';

var Good = require('good');

//Logs `ops`, `request`, `log`, and `error` with `60 seconds` interval

exports.options = {
	'opsInterval' : 60000,
	'reporters' : [{
		'reporter' : Good.GoodConsole
	}, {
		'reporter' : Good.GoodFile,
		'args' : ['server.txt', {
			'events' : {
				'ops' : '*'
			}
		}]
	}]
};
