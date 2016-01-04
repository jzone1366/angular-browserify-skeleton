'use strict';

var angular = require('angular');
var bulk = require('bulk-require');
var appConfig = require('../app.config');

var controllersModule = angular.module(appConfig.appName + '.controllers', []);

var controllers = bulk(__dirname, ['./**/!(*index|*.spec).js']);

for(var key in controllers) {
  var item = controllers[key];

  controllersModule.controller(item.name, item.fn);
}

module.exports = controllersModule;
