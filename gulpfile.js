const gulp       = require('gulp');
const concat     = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const uglify     = require('gulp-uglify');
const babel      = require("gulp-babel");
const sass       = require('gulp-sass')(require('sass'));
const rollup     = require('rollup-stream');
const source     = require('vinyl-source-stream');
const buffer     = require("vinyl-buffer");


var conf = {
    dist: "./dist",
    js: {
        file: 'coreui-alert.min.js',
        main: 'src/js/coreui.alert.js',
        src: 'src/js/*.js'
    },
    css: {
        file: 'coreui-alert.min.css',
        src: [
            'src/css/coreui-alert.scss'
        ]
    }
};


gulp.task('build_css', function(){
    return gulp.src(conf.css.src)
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(concat(conf.css.file))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(conf.dist));
});

gulp.task('build_css_fast', function(){
    return gulp.src(conf.css.src)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(concat(conf.css.file))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(conf.dist));
});


gulp.task('build_js', function() {
    return rollup({
        input: conf.js.main,
        sourcemap: false,
        format: 'umd',
        name: "CoreUI.alert",
        context: "window",
    })
        .pipe(source(conf.js.file))
        .pipe(buffer())
        .pipe(sourcemaps.init())
        .pipe(babel({
            "plugins": ["@babel/plugin-transform-template-literals"]
        }))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(conf.dist));
});

gulp.task('build_js_fast', function() {
    return rollup({
        input: conf.js.main,
        sourcemap: false,
        format: 'umd',
        name: "CoreUI.alert",
        plugins: [babel()],
        context: "window"
    })
        .pipe(source(conf.js.file))
        .pipe(buffer())
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(conf.dist));
});

gulp.task('build_watch', function() {
    gulp.watch(conf.css.src, gulp.series(['build_css_fast']));
    gulp.watch(conf.js.src, gulp.parallel(['build_js_fast']));
});

gulp.task("default", gulp.series(['build_js', 'build_css']));