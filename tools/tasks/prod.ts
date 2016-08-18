import * as sequence from 'run-sequence';
var $ = global;

$.gulp.task('prod', 'Create production distribution app', ['clean'], (cb:any)=> {
    cb = cb || function() {};
    $.prod = true;
    sequence(
        [
            'icons',
            'mocks',
            'favicons',
            'images',
            'fonts',
            'templates',
            'constants',
            'locales',
            'translations'
        ],
        [
            'styles',
            'scripts'
        ],
        cb
    );
}, {
    options: {
        'mocks': 'activate mocks'
    }
});