'use strict';

var Lab = exports.lab = require('lab').script();
var Code = require('code');
var Hapi = require('hapi');

var Server = new Hapi.Server();

Lab.describe('`Hapi.Pack` Test', function () {
	Lab.it('should have `Good` plugin', function (done) {
		Server.pack.register({
			'plugin' : require('good')
		}, function (error) {
			Code.expect(error).to.not.exist;

			done();
		});
	});

	Lab.it('should have `Lout` plugin', function (done) {
		Server.pack.register({
			'plugin' : require('lout')
		}, function (error) {
			Code.expect(error).to.not.exist;

			done();
		});
	});
});
