const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const clean = require('gulp-clean');

const SRC = 'src';
const DIST = 'dist';

gulp.task('dist', function() {
  return gulp.src(SRC + '/*.js')
    .pipe(concat('helpbutton.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(DIST));
});
gulp.task('clean', function () {  
  return gulp.src(DIST, {read: false})
    .pipe(clean());
});