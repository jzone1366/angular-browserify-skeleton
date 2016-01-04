'use strict';
var appConfig = require('./app.config');

var AppSettings = {
  appTitle: appConfig.appName,
  apiUrl: '/api/v1'
};

module.exports = AppSettings;
