var $ = global;

$.gulp.task('images', 'Copy images', () => {
    return $.gulp.src($.config.images.src)
    .pipe($.plugin.changed($.config.images.dest))
    .pipe($.plugin.if($.prod, $.plugin.imagemin()))
    .pipe($.plugin.if($.prod, $.cachebust.resources()))
    .pipe($.gulp.dest($.config.images.dest));
});