var gulp = require('gulp');
var $    = {};

$.less        = require('gulp-less');
$.minifyCSS   = require('gulp-minify-css');
$.concat      = require('gulp-concat');
$.htmlmin     = require('gulp-htmlmin');
$.clean       = require('gulp-clean');
$.browserSync = require('browser-sync').create();
$.reload      = $.browserSync.reload;

//---

gulp.task('browser-sync', function() {
  $.browserSync.init({server: './src'});
});

//---

gulp.task('less', function() {
  gulp.src('./src/less/*.less')
      .pipe($.less())
      .pipe($.minifyCSS())
      .pipe($.concat('main.css'))
      .pipe(gulp.dest('./dist'))
      .pipe($.browserSync.stream());
});

//---

gulp.task('js', function() {
  gulp.src('./src/js/*.js')
      .pipe($.concat('script.js'))
      .pipe(gulp.dest('./dist'))
      .pipe($.browserSync.stream());
});

//---

gulp.task('html-minify', function() {
  gulp.src('./src/*.html')
      .pipe($.htmlmin({collapseWhitespace: true}))
      .pipe(gulp.dest('./dist'));
});

//---

gulp.task('clean', function() {
  gulp.src('./dist')
      .pipe($.clean());
});

//---

gulp.task('html-watch', ['html-minify'], $.reload);
gulp.task('less-watch', ['less'], $.reload);
gulp.task('js-watch', ['js'], $.reload);

//---

gulp.task('default', ['clean', 'less', 'js', 'html-minify', 'browser-sync'], function() {
  gulp.watch('./src/*.html', ['html-watch']);

  gulp.watch('./src/less/*.less', ['less-watch']);

  gulp.watch('./src/js/*.js', ['js-watch']);
});
