'use strict';

var gulp        = require( 'gulp' );
var gutil       = require( 'gulp-util' );
var jshint      = require( 'gulp-jshint' );
var mochify     = require( 'mochify' );
var source      = require( 'vinyl-source-stream' );
var buffer      = require( 'vinyl-buffer' );
var runSeq      = require( 'run-sequence' );
var config      = require( '../config' );

// By default, tests are run in phantomjs, a headless browser
// See http://phantomjs.org/
// Samples gulp tasks are provided to run tests in node or webdriver instead
// That is 'test_node' and 'test_webdriver'

gulp.task(
    'test',
    function( done ){
        return mochify( config.tests.glob, { phantomjs: './node_modules/.bin/phantomjs', reporter: 'xunit' } )
            .on( 'error', function( err ) { if( err ) done( err ); else done(); } )
            .bundle( function( err ){ if( err ) throw err; } )
            .pipe( source( 'phantomjs-tests.xml' ) )
            .pipe( gulp.dest( config.tests.reports_dir ) );
    }
);

gulp.task(
    'test_node',
    function( done ){
        return mochify( config.tests.glob, { node: true, reporter: 'xunit' } )
            .on( 'error', function( err ) { if( err ) done( err ); else done(); } )
            .bundle( function( err ){ if( err ) throw err; } )
            .pipe( source( 'node-tests.xml' ) )
            .pipe( gulp.dest( config.tests.reports_dir ) );
    }
);

gulp.task(
    'test_webdriver',
    function( done ){
        return mochify( config.tests.glob, { wd: true , reporter: 'xunit'} )
            .on( 'error', function( err ) { if( err ) done( err ); else done(); } )
            .bundle( function( err ){ if( err ) throw err; } )
            // XUnit reporting do not work as the task return too soon
            .pipe( source( 'webdriver-tests.xml' ) )
            .pipe( gulp.dest( config.tests.reports_dir ) );
    }
);

gulp.task(
    'lint',
    function()
    {
        return gulp.src( [ config.scripts.glob ] )
            .pipe( jshint() )
            .pipe( jshint.reporter( 'jshint-stylish' ) );
    }
);

gulp.task(
    'check',
    function( done )
    {
        runSeq( 'test', 'lint', done );
    }
);

gulp.task(
    'watch_test',
    function() { gulp.watch( [ config.scripts.glob, config.tests.glob ], [ 'test' ] ); }
);
