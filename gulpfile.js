var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');

gulp.task('sass', function() {
  return gulp.src('scss/**/*.scss').pipe(sass()).pipe(autoprefixer({
    browsers: [
      "last 2 versions",
      ">= 0.2%",
      "Chrome >= 55",
      "Firefox >= 54",
      "iOS >= 10",
      "Safari >= 10",
      "Android >= 4.4"
	   ],
    cascade: false
  })).pipe(cleanCSS({
    level: {
      1: {
        all: true,
        tidySelectors: true
      }
    }
  })).pipe(sass({
    outputStyle: 'minified'
  }).on('error', sass.logError)).pipe(gulp.dest('dist/css/src/'))
})

gulp.task('scripts', function() {
  return gulp.src([
    'js/accessibility-tool.js'
  ])
  .pipe(concat('accessiblity-tool.js'))
  .pipe(gulp.dest('dist/js/src/'));
});

gulp.task('watch', ['scripts'], function() {
    gulp.watch('scss/**/*.scss', ['sass']);
    gulp.watch('js/accessibility-tool.js', ['scripts']);
});
