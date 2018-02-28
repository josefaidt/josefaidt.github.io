const gulp = require('gulp'),
concat = require('gulp-concat'),
uglify = require('gulp-uglify'),
rename = require('gulp-rename'),
cssmin = require('gulp-cssmin'),
sass = require('gulp-sass'),
imagemin = require('gulp-imagemin');

// common paths
const paths = {
  images: './src/img/**/*',
  scss: './src/css/*.scss',
  css: './src/css/*.css',
  html: './src/*.html',
  // dist: './dist'
  dist: './'
};


// concatenate and minify JS
// gulp.task('scripts', function() {
//   return gulp.src([
//     'src/js/main.js',
//     'src/js/app.js'
//   ])
//     .pipe(concat('main.js'))
//     .pipe(gulp.dest('dist'))
//     .pipe(rename({suffix: '.min'}))
//     .pipe(uglify())
//     .pipe(gulp.dest('dist'));
// });


// transpile SCSS and minify
gulp.task('css', function() {
  return gulp.src(paths.scss) // Gets all files src/css
    .pipe(sass())
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./src/css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(cssmin({zindex: false}))
    .pipe(gulp.dest('./src/css'))
    .pipe(gulp.dest('./dist/css'));
});

// copy & optimize all images
gulp.task('images', function() {
  return gulp.src(paths.images)
    // Pass in options to the task 
    .pipe(imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest('dist/img'));
});

// copy html files
gulp.task('html', function() {
  gulp.src('./src/*.html')
    .pipe(gulp.dest(paths.dist));
});

// watch for changes
gulp.task('watch', function() {
  gulp.watch(paths.scss, ['css']);
  gulp.watch(paths.images, ['images']);
  gulp.watch(paths.html, ['html']);
});

// Default Task
// gulp.task('default', ['watch', 'css', 'images', 'copy', 'html']);
gulp.task('default', ['watch']);