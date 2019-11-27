var gulp = require('gulp');
var ts = require('gulp-typescript');
var concat = require('gulp-concat');
var tsProject = ts.createProject("tsconfig.json");


gulp.task('scripts', function() {
    var tsResult = gulp.src("src/*.ts") // or tsProject.src()
        .pipe(tsProject());

    return tsResult.js.pipe(gulp.dest('release'));
});
