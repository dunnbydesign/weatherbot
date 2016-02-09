'use strict'

var gulp = require('gulp')
var sass = require('gulp-sass')

var sassPath = './app/assets/scss/**/*.scss'
var defaultTasks = ['sass']

gulp.task('sass', function () {
  return gulp.src(sassPath)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/assets/css'))
})

gulp.task('sass:watch', function () {
  gulp.watch(sassPath, ['sass'])
})

gulp.task('default', defaultTasks)
