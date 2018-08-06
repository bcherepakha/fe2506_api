'use strict';

/* Подключение необходимых плагинов */
const gulp = require('gulp'),
    browserSync = require('browser-sync'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    watch = require('gulp-watch');

gulp.task('devserver', function() {
    browserSync({
            server: {
                baseDir: './public'
            },
            tunnel: true,
            host: 'localhost',
            port: 9000,
            injectChanges: false,
            logPrefix: 'BrowserSync Log'
        });
});

gulp.task('js', function () {
    return browserify({
            entries: 'src/base.js'
        })
        .bundle()
        .on('error', err => {
            console.log("Browserify Error", err.message);
        })
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(gulp.dest('public/js/'));
});

gulp.task('watch', function() {
    watch(['src/base.js','src/**/*.js'], function() {
        gulp.start('js');
    });
});

gulp.task('default', ['devserver', 'watch']);
