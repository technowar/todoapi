'use strict';

var Lab = exports.lab = require('lab').script();
var Code = require('code');
var Hapi = require('hapi');

Lab.describe('`Plugins` Test', function () {
	var Server = new Hapi.Server();

	Lab.it('should have `Good` plugin', function (done) {
		Server.register({
			'register' : require('good'),
			'options' : require('../utils/log/')
		}, function (error) {
			Code.expect(error).to.not.exist;

			done();
		});
	});

	Lab.it('should have `Lout` plugin', function (done) {
		Server.register({
			'register' : require('lout')
		}, function (error) {
			Code.expect(error).to.not.exist;

			done();
		});
	});

	Lab.it('should have `api` plugin', function (done) {
		Server.register({
			'register' : require('../api')
		}, function (error) {
			Code.expect(error).to.not.exist;

			done();
		});
	});
});
