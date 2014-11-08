'use strict';

var Mongoose = require('mongoose');
var Joi = require('joi');

var Task = Mongoose.model('Task');

module.exports = [{
	'method' : 'POST',
	'path' : '/v1/task',
	'config' : {
		'handler' : function (request, reply) {
			var newTask = new Task({
				'title' : request.payload.title,
				'isCompleted' : false,
				'isEditable' : false,
				'createdAt' : new Date(),
				'updatedAt' : new Date()
			});

			newTask.save(function (error, data) {
				if (!error) {
					reply(data)
						.code(200);
				}
			});
		},
		'validate' : {
			'payload' : {
				'title' : Joi.string().required(),
				'isCompleted' : Joi.boolean().allow(),
				'isEditable' : Joi.boolean().allow(),
				'createdAt' : Joi.date().allow(),
				'updatedAt' : Joi.date().allow()
			}
		}
	}
}, {
	'method' : 'PUT',
	'path' : '/v1/task/{id}',
	'config' : {
		'handler' : function (request, reply) {
			Task.findOne({
				'_id' : request.params.id
			}, function (error, data) {
				if (!error) {
					data.title = request.payload.title;
					data.isCompleted = request.payload.isCompleted;
					data.updatedAt = new Date();
					data.save();

					reply(data)
						.code(200);
				}
			});
		},
		'validate' : {
			'payload' : {
				'title' : Joi.string().allow(),
				'isCompleted' : Joi.boolean().allow()
			}
		}
	}
}, {
	'method' : 'GET',
	'path' : '/v1/task/{id}',
	'config' : {
		'handler' : function (request, reply) {
			Task.find({
				'_id' : request.params.id
			}, function (error, data) {
				if (!error) {
					reply(data)
						.code(200);
				}
			});
		},
		'validate' : {
			'params' : {
				'id' : Joi.string().required()
			}
		}
	}
}, {
	'method' : 'DELETE',
	'path' : '/v1/task/{id}',
	'config' : {
		'handler' : function (request, reply) {
			Task.findByIdAndRemove(request.params.id, function (error, data) {
				if (!error) {
					reply(data)
						.code(200);
				}
			});
		},
		'validate' : {
			'params' : {
				'id' : Joi.string().required()
			}
		}
	}
}, {
	'method' : 'GET',
	'path' : '/v1/tasks',
	'handler' : function (request, reply) {
		Task.find(function (error, data) {
			if (!error) {
				reply(data)
					.code(200);
			}
		});
	}
}];
