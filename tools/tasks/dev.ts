import * as sequence from 'run-sequence';
var $ = global;

$.gulp.task('dev', 'Create development distribution app', ()=> {
    sequence(
        [
            'icons',
            'mocks',
            //'favicon'
        ]
    );
}, {
    options: {
        'mocks': 'activate mocks'
    }
});