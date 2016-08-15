export const config = {
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