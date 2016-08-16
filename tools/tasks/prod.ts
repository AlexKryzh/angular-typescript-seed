import * as sequence from 'run-sequence';
var $ = global;

$.gulp.task('prod', 'Create production distribution app', (cb:any)=> {
    cb = cb || function() {};
    $.prod = true;
    sequence(
        [
            'icons',
            'mocks',
            'favicons'
        ],
        [
            //'manifest' //find the way to add custom data
        ],
        cb
    );
}, {
    options: {
        'mocks': 'activate mocks'
    }
});