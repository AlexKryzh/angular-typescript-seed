var $ = global;

$.gulp.task('dev', 'Dev', ()=> {
    $.plugin.util.log('test1 ', 'test2', $.plugin.util.colors.green(`prod: ${$.prod}`));
});