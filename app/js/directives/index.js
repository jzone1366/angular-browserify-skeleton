'use strict';

var angular = require('angular');
var bulk = require('bulk-require');
var appConfig = require('../app.config');

var directivesModule = angular.module(appConfig.appName + '.directives', []);

var directives = bulk(__dirname, ['./**/!(*index|*.spec).js']);

for(var key in directives) {
  var item = directives[key];

  directivesModule.directive(item.name, item.fn);
}

module.exports = directivesModule;
