'use strict';

var server = require('../');
var Code = require('code');
var Lab = exports.lab = require('lab').script();

Lab.describe('`Hello, world!` Test', function () {
	Lab.it('should return `Hello, world!`', function (done) {
		var options = {
			'method' : 'GET',
			'url' : '/',
			'payload' : {
				'text' : 'Hello, world!'
			}
		};

		server.inject(options, function (response) {
			Code.expect(response.statusCode).to.equal(200);
			Code.expect(response.payload).to.equal('Hello, world!');

			done();
		});
	});
});
