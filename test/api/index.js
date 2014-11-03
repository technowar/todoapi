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
		}

		Server.inject(options, function (response) {
			Code.expect(response.statusCode).to.equal(404);
			Code.expect(response.result).to.equal('Page not found');

			done();
		});
	});

	Lab.it('should return all `Tasks`', function (done) {
		var options = {
			'method' : 'GET',
			'url' : '/tasks'
		}

		Server.inject(options, function (response) {
			Code.expect(response.statusCode).to.equal(200);

			done();
		});
	});
});
