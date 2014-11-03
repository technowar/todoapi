'use strict';

var Lab = exports.lab = require('lab').script();
var Code = require('code');
var server = require('../../server');

Lab.describe('`Hello, world!` Test', function () {
	Lab.it('should return `Hello, world!`', function (done) {
		var options = {
			'method' : 'GET',
			'url' : '/'
		};

		server.inject(options, function (response) {
			Code.expect(response.statusCode).to.equal(200);
			Code.expect(response.result).to.equal('Hello, world!');

			done();
		});
	});
});
