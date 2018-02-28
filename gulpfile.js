const gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    cssmin = require('gulp-cssmin'),
    sass = require('gulp-sass'),
    imagemin = require('gulp-imagemin');


// concatenate and minify JS
// gulp.task('scripts', () => {
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


// transpile SCSS
gulp.task('scss', () => {
  return gulp.src('src/scss/style.scss') // Gets all files src/css
    .pipe(sass())
    .pipe(gulp.dest('src/css'))
});

// minify css
gulp.task('cssmin', () => {
  return gulp.src('src/css/style.css')
    .pipe(rename({suffix: '.min'}))
    .pipe(cssmin({zindex: false}))
    .pipe(gulp.dest('css'));
})

// optimize & copy all images
gulp.task('imgmin', () => {
  return gulp.src('src/img/**/*')
    // Pass in options to the task 
    .pipe(imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest('img'));
});

// copy html files
gulp.task('html', () => {
  gulp.src('src/**/*.html')
    .pipe(gulp.dest('./'));
});

// watch for changes
gulp.task('watch', () => {
  gulp.watch('src/scss/**/*.scss', ['scss']);
  gulp.watch('src/css/style.css', ['cssmin']);
  gulp.watch('src/img/**/*', ['imgmin']);
  gulp.watch('src/**/*.html', ['html']);
});

// Default Task
gulp.task('default', ['scss', 'cssmin', 'imgmin', 'html']);
// gulp.task('default', ['watch']);