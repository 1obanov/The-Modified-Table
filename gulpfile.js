var gulp = require('gulp');
var concat = require('gulp-concat');
var browserSync = require('browser-sync');
var sass = require('gulp-ruby-sass');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');



var Files = {
  html: './index.html',
  css_dest: './css',
  scss: './scss/style.scss',
  js_dest: './js',
  js: './js/app.js',
  resp_css_dest: './css',
  resp_scss: './scss/responsive.scss'
};


gulp.task('sass', function () {
  return sass(Files.scss, {
      style: 'expanded',
      sourcemap: true
    })
    .on('error', sass.logError)
    .pipe(sourcemaps.write())
    .pipe(autoprefixer())
    .pipe(rename('main.css'))
    .pipe(gulp.dest(Files.css_dest))
    .pipe(browserSync.reload({
      stream: true
    }));
});



gulp.task('resp_sass', function () {
  return sass(Files.resp_scss, {
      style: 'expanded',
      sourcemap: true
    })
    .on('error', sass.logError)
    .pipe(sourcemaps.write())
    .pipe(rename('responsive.css'))
    .pipe(gulp.dest(Files.resp_css_dest))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('js', function () {
  return gulp.src(Files.js)
    .pipe(concat('main.js'))
    .pipe(gulp.dest(Files.js_dest))
    .pipe(browserSync.reload({
      stream: true
    }));
});


gulp.task('default', ['resp_sass', 'sass', 'js'], function () {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });

  gulp.watch('./scss/**/*.scss', ['sass']);
  gulp.watch('./scss/**/*.scss', ['resp_sass']);
  gulp.watch('./js/**/*.js', ['js']);
  gulp.watch(Files.html, browserSync.reload);
});