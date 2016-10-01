var gulp = require('gulp');
var less = require('gulp-less');

var config = {
  file: 'src/less/style.less',
  dest: 'public/assets/styles'
};

gulp.task('lessc', function () {
    return gulp.src(config.file)
        .pipe(less())
        .pipe(gulp.dest(config.dest));
});

gulp.task('watch', function () {
    gulp.watch(config.file, ['lessc']);
});
