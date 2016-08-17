var $ = global;

$.gulp.task('constants', 'Create constants module',() =>{
    if($.prod){
        var environment = 'production';
    }else{
        var environment = 'development';
    }

    var constants = $.config.constants.properties;
    if($.prod){
        constants.cache_buster = $.timestamp;
    }

    for (var constant in $.config.environment[environment]){
        constants[constant] = $.config.environment[environment][constant];
    }

    return $.plugin.ngConstant({
        constants: constants,
        templatePath: $.config.constants.tpl,
        stream: true
    })
    .pipe($.plugin.if($.mocks, $.plugin.replace('mocks: false', 'mocks: true')))
    .pipe($.plugin.if(!$.mocks, $.plugin.replace('mocks: true', 'mocks: false')))
    .pipe($.plugin.rename($.config.constants.name))
    .pipe($.gulp.dest($.config.constants.dest));
});