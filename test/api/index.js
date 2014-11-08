'use strict';

var Server = require('../../server');

var Lab = exports.lab = require('lab').script();
var Code = require('code');
var Mongoose = require('mongoose');

var Task = Mongoose.model('Task');

Lab.describe('`Hello, world!` Test', function () {
	Lab.it('should return `Hello, world!`', function (done) {
		var options = {
			'method' : 'GET',
			'url' : '/'
		};

		Server.inject(options, function (response) {
			Code.expect(response.statusCode).to.equal(200);
			Code.expect(response.result).to.equal('Hello, world!');

			done();
		});
	});
});

Lab.describe('`Routes` Test', function () {
	var id = Mongoose.Types.ObjectId('4edd40c86762e0fb12000003');

	Lab.before(function (done) {
		var newTask = new Task({
			'_id' : id,
			'title' : 'Eat banana',
			'isCompleted' : false,
			'isEditable' : false,
			'createdAt' : new Date(),
			'updatedAt' : new Date()
		});

		newTask.save(function (error) {
			if (error) {
				throw new Error(error);
			}
		});

		done();
	});

	Lab.it('should return `Page not found` message', function (done) {
		var options = {
			'method' : '*',
			'url' : '/{p*}'
		};

		Server.inject(options, function (response) {
			Code.expect(response.statusCode).to.equal(404);
			Code.expect(response.result).to.equal('Page not found');

			done();
		});
	});

	Lab.it('should add a single `Task`', function (done) {
		var options = {
			'method' : 'POST',
			'url' : '/v1/task',
			'payload' : {
				'title' : 'Take medicine',
				'isCompleted' : false,
				'isEditable' : false,
				'createdAt' : new Date(),
				'updatedAt' : new Date()
			}
		};

		Server.inject(options, function (response) {
			Code.expect(response.statusCode).to.equal(200);
			Code.expect(response.result.title).to.be.a.string().and.equal(options.payload.title);
			Code.expect(response.result.isCompleted).to.be.a.boolean().and.equal(options.payload.isCompleted);
			Code.expect(response.result.isEditable).to.be.a.boolean().and.equal(options.payload.isEditable);
			Code.expect(response.result.createdAt).to.be.a.date();
			Code.expect(response.result.updatedAt).to.be.a.date();

			done();
		});
	});

	Lab.it('should modify a single `Task`', function (done) {
		var options = {
			'method' : 'PUT',
			'url' : '/v1/task/' + id,
			'payload' : {
				'title' : 'Eat banana',
				'isCompleted' : true
			}
		};

		Server.inject(options, function (response) {
			Code.expect(response.statusCode).to.equal(200);
			Code.expect(response.result.title).to.be.a.string().and.equal(options.payload.title);
			Code.expect(response.result.isCompleted).to.be.a.boolean().and.equal(options.payload.isCompleted);
			Code.expect(response.result.updatedAt).to.be.a.date();

			done();
		});
	});

	Lab.it('should retrieve a single `Task`', function (done) {
		var options = {
			'method' : 'GET',
			'url' : '/v1/task/' + id
		};

		Server.inject(options, function (response) {
			Code.expect(response.statusCode).to.equal(200);
			Code.expect(response.result).to.be.an.array();
			Code.expect(response.result[0].title).to.be.a.string();
			Code.expect(response.result[0].isCompleted).to.be.a.boolean();
			Code.expect(response.result[0].createdAt).to.be.a.date();
			Code.expect(response.result[0].updatedAt).to.be.a.date();

			done();
		});
	});

	Lab.it('should delete a single `Task`', function (done) {
		var options = {
			'method' : 'DELETE',
			'url' : '/v1/task/' + id
		};

		Server.inject(options, function (response) {
			Code.expect(response.statusCode).to.equal(200);
			Code.expect(response.result.title).to.be.a.string();
			Code.expect(response.result.isCompleted).to.be.a.boolean();
			Code.expect(response.result.createdAt).to.be.a.date();
			Code.expect(response.result.updatedAt).to.be.a.date();

			done();
		});
	});

	Lab.it('should return all `Tasks`', function (done) {
		var options = {
			'method' : 'GET',
			'url' : '/v1/tasks'
		};

		Server.inject(options, function (response) {
			Code.expect(response.statusCode).to.equal(200);
			Code.expect(response.result).to.be.an.array();

			done();
		});
	});

	Lab.after(function (done) {
		Mongoose.connection.collections['tasks'].drop(function (error) {
			if (error) {
				throw new Error(error);
			}
		});

		done();
	});
});
