import * as sequence from 'run-sequence';
var $ = global;

$.gulp.task('dev', 'Create development distribution app', ['clean'], (cb:any)=> {
    cb = cb || function() {};
    sequence(
        [
            'icons',
            'mocks',
            'favicon',
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
        [
            'watch'
        ], 
        cb
    );
}, {
    options: {
        'mocks': 'activate mocks'
    }
});