var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var minify = require('gulp-minify');

gulp.task('sass', function() {
  return gulp.src('src/scss/**/*.scss').pipe(sass()).pipe(autoprefixer({
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
  }).on('error', sass.logError)).pipe(gulp.dest('src/dist/css/'))
})

gulp.task('scripts', function() {
  return gulp.src([
    'src/js/accessibility-tool.js'
  ])
  .pipe(concat('accessiblity-tool.js'))
  .pipe(gulp.dest('src/dist/js/'));
});

gulp.task('watch', ['scripts'], function() {
    gulp.watch('src/scss/**/*.scss', ['sass']);
    gulp.watch('src/js/accessibility-tool.js', ['scripts']);
});

gulp.task('build-js', function() {
  gulp.src(['src/js/accessibility-tool.js'])
    .pipe(minify())
    .pipe(gulp.dest('dist/js/'))
});

gulp.task('build-css', function() {
  return gulp.src('src/dist/css/accessibility-tool.css').pipe(sass()).pipe(autoprefixer({
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
    outputStyle: 'compressed'
  }).pipe(gulp.dest('dist/css/')))
});

gulp.task('build', ['build-js', 'build-css']);
