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
    $.gulp.watch($.config.fonts.icons,   ['styles:inline:font']);
    $.gulp.watch($.config.modules.styles,   ['styles:modules']);
    $.gulp.watch($.config.styles.src,   ['styles']);
    $.gulp.watch([$.config.config, $.config.constants.tpl],   ['constants']);
    $.gulp.watch($.config.modules.templates,   ['templates:modules']);
    $.gulp.watch($.config.templates.src,   ['templates']);
    //$.gulp.watch(???,   ['scripts']);
    //$.gulp.watch(???,   ['scripts:modules']);

    //watch dist files change and reload browser
    $.gulp.watch([$.config.dist + '**/*']).on('change', $.bs.reload);
});