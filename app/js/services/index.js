'use strict';

var angular = require('angular');
var bulk = require('bulk-require');
var appConfig = require('../app.config');

var servicesModule = angular.module(appConfig.appName + '.services', []);

var services = bulk(__dirname, ['./**/!(*index|*.spec).js']);

for(var key in services) {
  var item = services[key];

  servicesModule.service(item.name, item.fn);
}

module.exports = servicesModule;
