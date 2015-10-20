var Gulp = require('gulp');
var Path = require('path');
var Merge = require('merge-stream');


Gulp.task('thirdparty', function () {

    var bootstrap = Gulp.src('./node_modules/bootstrap/dist/css/bootstrap.min.css')
        .pipe(Gulp.dest(Path.join('./public', 'styles')));

    var fontAwesome = Gulp.src('./node_modules/font-awesome/css/font-awesome.min.css')
        .pipe(Gulp.dest(Path.join('./public', 'styles')));

    var fonts = Gulp.src('./node_modules/font-awesome/fonts/**')
        .pipe(Gulp.dest(Path.join('./public', 'media', 'font-awesome', 'fonts')));

    return Merge(bootstrap, fontAwesome, fonts);
});