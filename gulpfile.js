const gulp = require("gulp");
const babel = require("gulp-babel");

gulp.task('babel', function() {
    gulp.src('./src/server/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('./dist/server'))
});

gulp.task('default', ['babel']);