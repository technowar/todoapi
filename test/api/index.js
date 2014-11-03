'use strict';

var Lab = exports.lab = require('lab').script();
var Code = require('code');

var Server = require('../../server');

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

	Lab.it('should save a single `Task`', function (done) {
		var options = {
			'method' : 'POST',
			'url' : '/v1/tasks',
			'payload' : {
				'title' : 'Eat banana',
				'isCompleted' : false,
				'createdAt' : new Date(),
				'updatedAt' : new Date()
			}
		};

		Server.inject(options, function (response) {
			Code.expect(response.statusCode).to.equal(200);
			Code.expect(response.result.title).to.be.a.string().and.equal(options.payload.title);
			Code.expect(response.result.isCompleted).to.be.a.boolean().and.equal(options.payload.isCompleted);
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
});
