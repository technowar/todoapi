'use strict';

var Mongoose = require('mongoose');
var Joi = require('joi');

var Task = Mongoose.model('Task');

module.exports = [{
	'method' : 'POST',
	'path' : '/v1/tasks',
	'config' : {
		'handler' : function (request, reply) {
			var newTask = new Task({
				'title' : request.payload.title,
				'isCompleted' : request.payload.isCompleted,
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
				'isCompleted' : Joi.boolean().required(),
				'createdAt' : Joi.allow().required(),
				'updatedAt' : Joi.allow().required()
			}
		}
	}
}, {
	'method' : 'GET',
	'path' : '/v1/tasks',
	'handler' : function (request, reply) {
		reply('Tasks')
			.code(200);
	}
}];
