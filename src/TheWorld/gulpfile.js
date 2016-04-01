/// <binding AfterBuild='min, moveToLibs' Clean='clean' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

/// <binding Clean='clean' />
"use strict";

var gulp = require("gulp"),
    rimraf = require("rimraf"),
    concat = require("gulp-concat"),
    cssmin = require("gulp-cssmin"),
    uglify = require("gulp-uglify");

var paths = {
    webroot: "./wwwroot/"
};

paths.js = paths.webroot + "js/**/*.js";
paths.minJs = paths.webroot + "js/**/*.min.js";
paths.css = paths.webroot + "css/**/*.css";
paths.minCss = paths.webroot + "css/**/*.min.css";
paths.concatJsDest = paths.webroot + "js/site.min.js";
paths.concatCssDest = paths.webroot + "css/site.min.css";

gulp.task("clean:js", function (cb) {
    rimraf(paths.concatJsDest, cb);
});

gulp.task("clean:css", function (cb) {
    rimraf(paths.concatCssDest, cb);
});

gulp.task("clean", ["clean:js", "clean:css"]);

gulp.task("min:js", function () {
    return gulp.src([paths.js, "!" + paths.minJs], { base: "." })
        .pipe(concat(paths.concatJsDest))
        .pipe(uglify())
        .pipe(gulp.dest("."));
});

gulp.task("min:css", function () {
    return gulp.src([paths.css, "!" + paths.minCss])
        .pipe(concat(paths.concatCssDest))
        .pipe(cssmin())
        .pipe(gulp.dest("."));
});

gulp.task("min", ["min:js", "min:css"]);

gulp.task("moveToLibs", function () {
    gulp.src([
        "node_modules/angular2/bundles/js",
        "node_modules/angular2/bundles/angular2.*.js*",
        "node_modules/angular2/bundles/angular2-polyfills.js",
        "node_modules/angular2/bundles/http.*.js*",
        "node_modules/angular2/bundles/router.*.js*"
    ]).pipe(gulp.dest("./wwwroot/lib/angular2/dist/"));

    gulp.src([
        "node_modules/systemjs/dist/*.*"
    ]).pipe(gulp.dest("./wwwroot/lib/systemjs/dist/"));

    gulp.src([
        "node_modules/rxjs/bundles/Rx.js"
    ]).pipe(gulp.dest("./wwwroot/lib/rxjs/dist/"));

    gulp.src([
        "node_modules/es6-shim/es6-shim.min.js*",
        "node_modules/angular2/es6/dev/src/testing/shims_for_IE.js"
    ]).pipe(gulp.dest("./wwwroot/lib/es6/dist/"));
});