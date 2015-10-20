var Gulp = require('gulp');
var Path = require('path');


Gulp.task('media', function () {
    return Gulp.src('./client/media/**/*')
        .pipe(Gulp.dest(Path.join('./public', 'media')));
});