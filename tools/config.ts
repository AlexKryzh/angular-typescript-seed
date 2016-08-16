export const config = {
    app:{
        name: 'Boilerplate'
    },
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
    icons: {
        fontname: 'icons',
        fonts: '../fonts/',
        classname: 'icon',
        template: 'tools/utils/icons.css',
        src:  'src/images/icons/**/*.svg',
        dest: 'src/fonts'
    },
    styles: {
        dev: 'src/styles/',
        src: 'src/styles/**/*.scss',
        dest: 'dist/styles',
        icons: '_icons.scss',
        prodSourcemap: false,
        autoprefixer: ['last 5 version', '> 0.1%', 'ie 9']
    }
};