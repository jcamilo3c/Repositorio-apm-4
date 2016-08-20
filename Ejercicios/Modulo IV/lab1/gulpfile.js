/*
* Dependencias
*/
var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify');

/*
* Configuración de la tarea 'demo'
*/
gulp.task('concat-files', function(){
	gulp.src('src/*.js')/*coge todos los archivos .min y los concatena*/
		.pipe(concat('lab1.min.js'))/*pipe que va a ir ocurriendo*/
		.pipe(uglify())
		.pipe(gulp.dest('build/'))/*carpeta donde van a quedar los .min*/
});