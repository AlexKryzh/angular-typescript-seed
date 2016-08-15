var $ = global;

$.gulp.task('mocks', 'Copy mock files', () =>{
    if($.mocks !== true){ return; }
    return $.gulp.src($.config.mocks.src)
        .pipe($.plugin.jsonlint())
        .pipe($.plugin.jsonlint.reporter())
        .pipe($.gulp.dest($.config.mocks.dest));
});

$.gulp.task('mocks:images', false, () =>{
    if($.mocks !== true){ return; }
    return $.gulp.src($.config.mocks.images.src)
        .pipe($.gulp.dest($.config.mocks.images.dest));
});