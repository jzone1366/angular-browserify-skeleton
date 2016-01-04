'use strict';
// Application Config Properties
var appConfig = require('./app.config');
//  Require Angular
var angular = require('angular');

//Require Angular NPM Modules
require('angular-ui-router');
require('angular-tooltips');
// Require Angular Modules
require('./templates');
require('./filters');
require('./controllers');
require('./services');
require('./directives');

//require third Party Modules.
//jquery needs to be saved to the global so it can be used. 
global.jQuery = require('jquery'); 
require('bootstrap-sass');

var requires = [
  'ui.router',
  '720kb.tooltips',
  'templates',
  appConfig.appName + '.filters',
  appConfig.appName + '.controllers',
  appConfig.appName + '.services',
  appConfig.appName + '.directives'
];

window.app = angular.module(appConfig.appName, requires);

angular.module(appConfig.appName).constant('AppSettings', require('./constants'));
angular.module(appConfig.appName).config(require('./config'));
angular.module(appConfig.appName).run(require('./run'));

angular.bootstrap(document, [appConfig.appName], {
  strictDi: true
});
