/// <binding AfterBuild='default' />
var gulp = require('gulp');

gulp.task('default', function (done) {
    gulp.src([
      'node_modules/angular2/bundles/angular2.*.js*',
      'node_modules/angular2/bundles/angular2-polyfills.js',
      'node_modules/angular2/bundles/http.*.js*',
      'node_modules/angular2/bundles/router.*.js*',
      'node_modules/es6-shim/es6-shim.min.js*',
      'node_modules/angular2/es6/dev/src/testing/shims_for_IE.js',
      'node_modules/systemjs/dist/*.*',
      'node_modules/rxjs/bundles/Rx.js',
    ]).pipe(gulp.dest('./wwwroot/lib/js'));

    gulp.src([
      'styles.css'
    ]).pipe(gulp.dest('./wwwroot/lib/css'));
});