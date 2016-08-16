import * as sequence from 'run-sequence';
var $ = global;

$.gulp.task('dev', 'Create development distribution app', (cb:any)=> {
    cb = cb || function() {};
    sequence(
        [
            'icons',
            'mocks',
            'favicon'
        ],
        cb
    );
}, {
    options: {
        'mocks': 'activate mocks'
    }
});