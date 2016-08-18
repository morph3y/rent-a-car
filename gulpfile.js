/// <binding AfterBuild='default' />
var gulp = require('gulp');

gulp.task('default', function (done) {
  // Modules
  gulp.src([
    'node_modules/**/*.js'
  ], { base: 'node_modules' }).pipe(gulp.dest('./wwwroot/lib/js'));
  
  gulp.src([
    'app/Views/**/*.*'
  ], { base: 'app/Views' }).pipe(gulp.dest('./wwwroot/app/Views'));

  // Mandatory
  gulp.src([
    'systemjs.config.js',
  ]).pipe(gulp.dest('./wwwroot/lib/js'));
  
  // Styles
  gulp.src([
    'styles.css'
  ]).pipe(gulp.dest('./wwwroot/lib/css'));
});