'use strict';

var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    livereload = require('gulp-livereload'),
    csso = require('gulp-csso'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    cleanhtml = require("gulp-cleanhtml");

// Paths
var bower = './app/bower_components';

gulp.task('default', function () {
    gulp.start('build');
});

gulp.task('images', function () {
    return gulp.src('app/img/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('dist/img'));
});

gulp.task('scripts', function () {
    gulp.src(['app/js/*.js'])
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('styles', function () {
    gulp.src(['app/sass/**/*.scss'])
        .pipe(sass({
            style: 'expanded'
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('pages', function () {
    return gulp.src('app/*.html')
        .pipe(cleanhtml())
        .pipe(gulp.dest('dist'));
});

gulp.task('build', ['scripts', 'styles', 'pages', 'images']);

gulp.task('server', function () {
    var connect = require('connect'),
        server = connect();
    server.use(connect.static('dist')).listen(process.env.PORT || 9122);
    require('opn')('http://localhost:' + (process.env.PORT || 9122));
});

gulp.task('watch', ['server'], function () {
    gulp.start('build');

    gulp.watch('app/img/**/*', ['images']);
    gulp.watch('app/sass/**/*.scss', ['styles']);
    gulp.watch('app/js/**/*.js', ['scripts']);
    gulp.watch('app/*.html', ['pages']);

    var server = livereload();
    gulp.watch('dist/**').on('change', function (file) {
        server.changed(file.path);
    });
});
