'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

var paths = {

    sassSource: ['*.sass'],
};

gulp.task('sass', function() {
    return gulp.src(paths.sassSource)
        .pipe(sass())
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./public/newStyles'));
});

gulp.task('watch', function() {
    gulp.watch(paths.sassSource, ['sass']);
})

gulp.task('default', ['watch', 'sass']);
