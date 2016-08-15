import * as sequence from 'run-sequence';
var $ = global;

$.gulp.task('prod', 'Create production distribution app', ()=> {
    $.prod = true;
    sequence(
        [
            'icons',
            'mocks',
            //'favicons'
        ]
    );
}, {
    options: {
        'mocks': 'activate mocks'
    }
});