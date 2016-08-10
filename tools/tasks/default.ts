import * as gulpCore from 'gulp';
import * as gulpHelp from 'gulp-help';

var gulp = gulpHelp(gulpCore);
gulp.task('default', false, ['help']);