/// <binding AfterBuild='default' />
var gulp = require('gulp');

gulp.task('default', function (done) {
  // Modules
  gulp.src([
    'node_modules/**/*.js'
  ], { base: 'node_modules' }).pipe(gulp.dest('./wwwroot/lib/js'));
  
  // Mandatory
  gulp.src([
    'systemjs.config.js',
  ]).pipe(gulp.dest('./wwwroot/lib/js'));
  
  // Styles
  gulp.src([
    'styles.css'
  ]).pipe(gulp.dest('./wwwroot/lib/css'));
});