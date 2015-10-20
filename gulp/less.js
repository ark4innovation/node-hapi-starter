var Path = require('path');
var Gulp = require('gulp');
var Newer = require('gulp-newer');
var Concat = require('gulp-concat');
var Less = require('gulp-less');


Gulp.task('less', function () {

    var bundleConfigs = [{
        entries: [
            './client/styles/app/*.less'
        ],
        dest: './public/styles',
        outputName: 'app.min.css'
    }];

    return bundleConfigs.map(function (bundleConfig) {

        return Gulp.src(bundleConfig.entries)
            .pipe(Newer(Path.join(bundleConfig.dest, bundleConfig.outputName)))
            .pipe(Concat(bundleConfig.outputName))
            .pipe(Less({ compress: true }))
            .pipe(Gulp.dest(bundleConfig.dest));
    });
});