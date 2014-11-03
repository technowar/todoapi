'use strict';

var Mongoose = require('mongoose');

var Task = {
	'title' : {
		'type' : String
	},
	'isCompleted' : {
		'type' : Boolean
	},
	'createdAt' : {
		'type' : Date
	},
	'updatedAt' : {
		'type' : Date
	}
};

var TaskSchema = new Mongoose.Schema(Task);

Mongoose.model('Task', TaskSchema);
