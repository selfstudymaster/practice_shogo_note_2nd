const gulp = require('gulp');
const sass = require('gulp-sass');

const paths = {
  'src': {
    'scss': 'src/scss/**/*.scss',
  },
  'css': 'css/',
};

gulp.task("default", function() {
  return (
    gulp.watch(paths.src.scss, function() {
      return (
        gulp.src(paths.src.scss)
        .pipe(sass({
          outputStyle: 'expanded',
        }).on('error', sass.logError))
        .pipe(gulp.dest(paths.css))
      );
    })
  );
});
