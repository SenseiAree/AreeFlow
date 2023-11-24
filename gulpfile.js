const {
    src,
    dest,
    watch,
    series
} = require("gulp");
const sass = require('gulp-sass')(require('sass'));

function buildStyles(){
    let output = src('src/**/*.scss')
        .pipe(sass())
        .pipe(dest('build/dist/css'));
    return output; 
}
function watchStyles(){
    watch(['src/**/*.scss'], buildStyles);
}

exports.default = series(buildStyles, watchStyles);