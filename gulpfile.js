var gulp = require('gulp'),
  sass = require('gulp-sass'),
  minifycss = require('gulp-minify-css'),
  uglify = require('gulp-uglify'),
  notify = require('gulp-notify'),
  concat = require('gulp-concat'),
  plumber = require('gulp-plumber');



/* styles */
gulp.task('styles', function () {
  return gulp.src('assets/css/main.sass')
    .pipe(sass({
      style: 'companded'
    }))
    .pipe(gulp.dest('assets/css/minify'))

  .pipe(minifycss())
    .pipe(gulp.dest('assets/css/minify'))

  .pipe(notify({
    message: 'Style task complete!'
  }))
});

/* styles  dev*/
gulp.task('stylesDev', function () {
  return gulp.src('assets/css/main.sass')
    .pipe(plumber())
    .pipe(sass({
      outputStyle: 'companded'
    }).on('error', sass.logError))

  .pipe(gulp.dest('assets/css/minify'))

  .pipe(notify({
    message: 'StyleDev task complete!' 
  }))
});

/* scripts */
gulp.task('scripts', function () {
  return gulp.src('assets/js/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('assets/js/minify'))

  .pipe(uglify())
    .pipe(gulp.dest('assets/js/minify'))
    .pipe(notify({
      message: 'Js task complete!'
    }))
});

/* scriptsDev */
gulp.task('scriptsDev', function () {
  return gulp.src('assets/js/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('assets/js/minify'))
  
   .pipe(notify({
      message: 'JsDev task complete!'
    }))
});

gulp.task('dev', function () {
  /* watch .sass|.scss files */
  gulp.watch(['assets/css/*.+(sass|scss)', 'assets/css/*/*.+(sass|scss)', 'assets/css/**/*.+(sass|scss)'], ['stylesDev']);
  /* watch .js files */
  gulp.watch(['assets/js/**/*.js'], ['scriptsDev']);
});

gulp.task('release', ['styles', 'scripts']);