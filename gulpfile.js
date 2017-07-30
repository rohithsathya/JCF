var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
 
gulp.task('scripts', function() {
  return gulp.src(['./stack.js', './queue.js', './linkedList.js','./tree.js','Graph.js'])
    .pipe(concat('JCF.js'))
    .pipe(minify({
        ext:{
            src:'.js',
            min:'.min.js'
        }
    }))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('default', [ 'scripts']);