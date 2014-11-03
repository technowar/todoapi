'use strict';

var Lab = exports.lab = require('lab').script();
var Code = require('code');
var Hapi = require('hapi');

var server = new Hapi.Server();

Lab.describe('`Hapi.Pack` Test', function () {
	Lab.it('should have `Good` plugin', function (done) {
		var options = {
			'opsInterval' : 60000
		};

		server.pack.register({
			'plugin' : require('good'),
			'options' : options
		}, function (error) {
			Code.expect(error).to.not.exist;

			done();
		});
	});

	Lab.it('should have `Lout` plugin', function (done) {
		server.pack.register({
			'plugin' : require('lout')
		}, function (error) {
			Code.expect(error).to.not.exist;

			done();
		});
	});
});