'use strict';

var Root = require('./routes/root');
var Task = require('./routes/task');

exports.register = function (plugin, options, next) {
	plugin.route(Root);
	plugin.route(Task);

	next();
};

exports.register.attributes = {
	name : 'api',
	version : 1.0
};
