'use strict';

var config = require('../config');
var gulp = require('gulp');
var gulpif = require('gulp-if');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var buffer = require('vinyl-buffer');
var streamify = require('gulp-streamify');
var watchify = require('watchify');
var browserify = require('browserify');
var babelify = require('babelify');
var uglify = require('gulp-uglify');
var handleErrors =  require('../util/handleErrors');
var browserSync = require('browser-sync');
var debowerify = require('debowerify');
var ngAnnotate = require('browserify-ngannotate');

function createSourcemap() {
  return !global.isProd || config.browserify.prodSourcemap;
}

// Based on: http://blog.avisi.nl/2014/04/25/how-to-keep-a-fast-build-with-browserify-and-reactjs/
function buildScript(file) {

  var bundler = browserify({
    entries: [config.sourceDir + 'js/' + file],
    debug: createSourcemap(),
    cache: {},
    packageCache: {},
    fullPaths: !global.isProd
  });

  if ( !global.isProd ) {
    bundler = watchify(bundler);

    bundler.on('update', function() {
      rebundle();
      gutil.log('Rebundle...');
    });
  }

  var transforms = [
    { 'name':babelify, 'options': {}},
    { 'name':debowerify, 'options': {}},
    { 'name':ngAnnotate, 'options': {}},
    { 'name':'brfs', 'options': {}},
    { 'name':'bulkify', 'options': {}}
  ];

  transforms.forEach(function(transform) {
    bundler.transform(transform.name, transform.options);
  });

  function rebundle() {
    var stream = bundler.bundle();
    var sourceMapLocation = global.isProd ? './' : '';

    return stream.on('error', handleErrors)
      .pipe(source(file))
      .pipe(gulpif(createSourcemap(), buffer()))
      .pipe(gulpif(createSourcemap(), sourcemaps.init({ loadMaps: true })))
      .pipe(gulpif(global.isProd, streamify(uglify({
        compress: { drop_console: true }
      }))))
      .pipe(gulpif(createSourcemap(), sourcemaps.write(sourceMapLocation)))
      .pipe(gulp.dest(config.scripts.dest))
      .pipe(browserSync.stream());
  }

  return rebundle();
}

gulp.task('browserify', function() {
  return buildScript('app.js');
});
