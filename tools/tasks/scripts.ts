var $ = global;
const browserify = require('browserify');
const tsify = require('tsify');
const ngAnnotate = require('browserify-ngannotate');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

namespace Bundler{
    interface BundleValidator {
        path: string,
        sourcemap: boolean,
        bundler: any,
        transforms: any[],
        build(): any
    }

    export class Bundle implements BundleValidator {
        sourcemap: boolean;
        bundler: any;
        transforms: any[];
        constructor (public path: string){
            let that = this;
            this.path = path;
            this.sourcemap = !$.prod || $.config.scripts.sourcemap;
            this.bundler = browserify({
                //entries: [$.config.scripts.dev + this.path],
                debug: this.sourcemap,
                cache: {},
                packageCache: {},
                fullPaths: !$.prod
            }).add($.config.scripts.dev + this.path);
            this.transforms = [
                //{ 'name':babelify, 'options': {}},
                //{ 'name':tsify, 'options': {noImplicitAny: true}},
                //{ 'name':ngAnnotate, 'options': {}},
                //{ 'name':'brfs', 'options': {}},
                //{ 'name':'bulkify', 'options': {}}
            ];
            this.transforms.forEach(function(transform) {
                that.bundler.transform(transform.name, transform.options);
            });
        }
        build(){
            const stream = this.bundler.plugin(tsify, {}).bundle();
            const sourceMapLocation = $.prod ? './' : '';

            return stream.on('error', function (err:any) {
                    $.plugin.util.log(err.toString());
                    this.emit('end');
                })
                .pipe(source(this.path))
                .pipe($.plugin.if(this.sourcemap, buffer()) )
                .pipe($.plugin.if(this.sourcemap, $.plugin.sourcemaps.init({ loadMaps: true })) )
                .pipe($.plugin.if($.prod, $.plugin.streamify($.plugin.uglify({
                    compress: { drop_console: true }
                }))))
                .pipe($.plugin.if(this.sourcemap, $.plugin.sourcemaps.write(sourceMapLocation)) )
                .pipe($.plugin.rename({dirname: ''}) )
                .pipe($.plugin.if($.prod, $.cachebust.resources()))
                .pipe($.plugin.rename(function (path:any) {
                    path.extname = '.js'
                }))
                .pipe($.gulp.dest($.config.scripts.dest));
        }
    }

}

$.gulp.task('scripts', 'Process scripts files', ['scripts:modules'],() =>{
    return new Bundler.Bundle($.config.modules.main).build();
});

$.gulp.task('scripts:modules', false, $.plugin.folders($.config.modules.src, (module:any) =>{
    return new Bundler.Bundle(module + '.ts').build();
 }));