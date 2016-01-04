'use strict';

var gutil = require('gulp-util');
var prettyHrtime = require('gulp-hrtime');

var startTime;

var logger = {
  start: function() {
    startTime = process.hrtime();
    gutil.log('Running', gutil.colors.green(`'bundle'`) + '...');
  },

  end: function() {
    var taskTime = process.hrtime(startTime);
    var prettyTime = prettyHrtime(taskTime);
    gutil.log('Finished', gutil.colors.green(`'bundle'`), 'in', gutil.colors.magenta(prettyTime));
  }

};

module.exports = logger;
