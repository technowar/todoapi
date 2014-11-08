'use strict';

var Mongoose = require('mongoose');

var TaskSchema = new Mongoose.Schema({
	'title' : {
		'type' : String
	},
	'isCompleted' : {
		'type' : Boolean
	},
	'isEditable' : {
		'type' : Boolean
	},
	'createdAt' : {
		'type' : Date
	},
	'updatedAt' : {
		'type' : Date
	}
});

Mongoose.model('Task', TaskSchema);
