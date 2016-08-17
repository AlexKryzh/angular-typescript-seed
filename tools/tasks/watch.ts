var $ = global;

$.gulp.task('watch', 'Watch changes, relaunch tasks and reload browser', ['server'], () =>{
    //watch files change and run task
    $.gulp.watch($.config.icons.src,  ['icons']);
    $.gulp.watch($.config.mocks.images.src,  ['mocks:images']);
    $.gulp.watch($.config.mocks.src,  ['mocks']);
    $.gulp.watch($.config.favicons.dev,  ['favicon']);
    $.gulp.watch($.config.favicons.src,  ['favicons']);
    $.gulp.watch($.config.images.src,  ['images']);
    $.gulp.watch($.config.fonts.src,   ['fonts']);
    $.gulp.watch($.config.fonts.icons,   ['inline:fonts']);

    //watch dist files change and reload browser
    $.gulp.watch([$.config.dist + '**/*']).on('change', $.bs.reload);
});