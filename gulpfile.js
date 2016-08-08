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
  
  // Application
  gulp.src([
    'app/**/*.js',
  ], { base: 'app' }).pipe(gulp.dest('./wwwroot/app'));

  // Styles
  gulp.src([
    'styles.css'
  ]).pipe(gulp.dest('./wwwroot/lib/css'));
});