var $ = global;

$.gulp.task('favicon', 'Copy favicon', () =>{
    return $.gulp.src($.config.favicons.dev)
    .pipe($.plugin.changed($.config.favicons.dest))
    .pipe($.gulp.dest($.config.favicons.dest));
});