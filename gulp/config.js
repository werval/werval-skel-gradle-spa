'use strict';

module.exports = {
    sources: {
        root: 'src/main/web',
        scripts: 'src/main/web/scripts/**/*.js',
        tests: 'src/main/web/test/**/*.js',
        styles: 'src/main/web/styles/**/*.css'
    },
    browserify: {
        entries: ['./src/main/web/scripts/app.js'],
        bundleName: 'app.js'
    },
    build: {
        root: 'build/web/spa',
        scripts: 'build/web/spa/scripts',
        styles: 'build/web/spa/styles'
    },
    tests: {
        reports_dir: 'build/reports/gulp_check'
    }
};
