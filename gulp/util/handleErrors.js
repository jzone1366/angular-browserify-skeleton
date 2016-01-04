'use strict';

var notify = require('gulp-notify');

var handleErrors = function(error) {
  if(!global.isProd) {
    var args = Array.prototype.slice.call(arguments);

    notify.onError({
      title: 'Compile Error',
      message: '<%= error.message %>'
    }).apply(this, args);

    this.emit('end');
  } else {
    console.log(error);
    process.exit(1);
  }
};

module.exports = handleErrors;
