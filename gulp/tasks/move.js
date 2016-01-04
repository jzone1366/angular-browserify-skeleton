'use strict';

var gulp = require('gulp');
var config = require('../config');

gulp.task('move', function() {
	return gulp.src('node_modules/font-awesome/fonts/**')
		.pipe(gulp.dest('app/fonts'))
});