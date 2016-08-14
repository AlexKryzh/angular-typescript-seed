var $ = global;

$.gulp.task('prod', 'Prod', ()=> {
    $.prod = true;
    $.plugin.util.log('test1 ', 'test2', $.plugin.util.colors.red(`prod: ${$.prod}`));
});