const gulp = require("gulp");
const {src, dest} = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const sass = require("gulp-sass");

const path = {
    build: {
        css: "build/css"
    },
    src: {
        css: "style/style.scss",
    }
}

function css() {
    return src(path.src.css, {base: "style/"})
        .pipe(sass())
        .pipe(autoprefixer({
            Browserslist: ['last 8 versions'],
            cascade: true
        }))
        .pipe(dest(path.build.css))
}

gulp.task("style", css);