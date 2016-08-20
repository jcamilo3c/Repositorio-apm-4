var gulp = require('gulp'),
	cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    concatCss = require('gulp-concat-css'),
    concatJs = require('gulp-concat'),
    uglifyJs = require('gulp-uglify');/**/


gulp.task('concat-css', function(){
    return gulp.src(['src/normalize.css', 'src/skeleton.css', 'src/styles.css'])
        .pipe(concatCss('bundle.css'))/*concatena los 3 de arriba en el archivo bundle.css*/
        .pipe(gulp.dest('src/css/'));
});

gulp.task('minify-css', ['concat-css'], function(){ /*minify-css ejecuta tambien concat-css porque esta anidado, o ejecutar los dos por separado concat-css*/
  return gulp.src('src/css/bundle.css')
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/'));
});

gulp.task('concat-files', function(){
    gulp.src('src/*.js')
    .pipe(concatJs('lab1.min.js'))
    .pipe(uglifyJs())
    .pipe(gulp.dest('build/'))
});