var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('src/App_navbar.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/'))
});

//Watch task
gulp.task('default',function() {
    gulp.watch('sass*.scss',['styles']);
});
