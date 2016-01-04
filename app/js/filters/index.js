'use strict';

var angular = require('angular');
var bulk = require('bulk-require');
var appConfig = require('../app.config');

var filtersModule = angular.module(appConfig.appName + '.filters', []);

var filters = bulk(__dirname, ['./**/!(*index|*.spec).js']);

for(var key in filters) {
  var item = filters[key];

  filtersModule.filter(item.name, item.fn);
}

module.exports = filtersModule;
