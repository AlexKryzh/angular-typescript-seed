export const config = {
    app:{
        name: 'Boilerplate'
    },
    port: {
        browser: 3000,
        ui: 3001,
        test: 3002
    },
    dist: './dist/',
    src: './src/',
    assetExtensions: [
        'js',
        'json',
        'css',
        'png',
        'jpe?g',
        'gif',
        'ico',
        'svg',
        'eot',
        'otf',
        'ttc',
        'ttf',
        'woff',
        'woff2?'
    ],
    favicons: {
        src: 'src/images/favicon/favicon.svg',
        dev: 'src/images/favicon/favicon.ico',
        dest: 'dist/images/favicons/',
        path: '/images/favicons/',
        color: {
            light: '#ffffff',
            dark: '#000000'
        },
        data: 'faviconData.json'
    },
    mocks: {
        src: 'src/resources/mocks/*.json',
        dest: 'dist/resources/mocks',
        images: {
            src: 'src/images/mocks/**/*',
            dest: 'dist/images/mocks'
        }
    },
    scripts: {
        dev: 'src/scripts/',
        index: 'app.js',
        src: 'src/scripts/**/*.js',
        dest: 'dist/scripts',
        files: '**/*.js',
        jshint: ['src/scripts/**/*.js', 'src/modules/**/*.js', '!src/modules/**/*_tpl.js', '!src/modules/**/*_spec.js', '!src/modules/**/*_css.js', '!src/scripts/**/*_tpl.js']
    },
    modules: {
        src: 'src/modules/',
        styles: 'src/modules/**/*.scss',
        templates: 'src/modules/**/*.htm*',
        scripts: 'src/modules/**/*.js',
        tests: '!src/modules/**/*_spec.js'
    },
    icons: {
        fontname: 'icons',
        fonts: '../fonts/',
        classname: 'icon',
        template: 'tools/utils/icons.css',
        src:  'src/images/icons/**/*.svg',
        dest: 'src/fonts'
    },
    images: {
        dir: 'src/images/',
        src: ['src/images/**/*.png', 'src/images/**/*.jpg', 'src/images/**/*.gif', 'src/images/**/*.svg', '!src/images/icons/*', '!src/images/favicon/*', '!src/images/mocks/*'],
        dest: 'dist/images'
    },
    fonts: {
        icons: 'src/fonts/icons*',
        src: ['src/fonts/*', '!src/fonts/icons*'],
        dest: 'dist/fonts'
    },
    styles: {
        dev: 'src/styles/',
        src: 'src/styles/**/*.scss',
        dest: 'dist/styles',
        icons: '_icons.scss',
        prodSourcemap: false,
        autoprefixer: ['last 5 version', '> 0.1%', 'ie 9']
        //sassIncludePaths: []
    }
};