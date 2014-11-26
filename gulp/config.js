'use strict';

module.exports = {
    sources: {
        root: 'src/main/web'
    },
    build: {
        root: 'build/web/spa'
    },
    scripts: {
        glob: 'src/main/web/scripts/**/*.js',
        entries: ['./src/main/web/scripts/main.js'],
        bundle_name: 'main.js',
        dest: 'build/web/spa/scripts'
    },
    tests: {
        glob: './src/main/web/test/**/*.js'
    },
    styles: {
        glob: 'src/main/web/styles/**/*.(less|css)',
        entries: [ 'src/main/web/styles/main.less' ],
        dest: 'build/web/spa/styles'
    }
};
