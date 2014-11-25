'use strict';

var gulp        = require( 'gulp' );
var gutil       = require( 'gulp-util' );
var mocha       = require( 'gulp-mocha' );
var jshint      = require( 'gulp-jshint' );
var runSeq      = require( 'run-sequence' );
var config      = require( '../config' );

gulp.task(
    'test',
    function()
    {
        return gulp.src( [ config.sources.tests ], { read: false } )
            .pipe( mocha( { reporter: 'list' } ) )
            .on( 'error', gutil.log );
    }
);

gulp.task(
    'lint',
    function()
    {
        return gulp.src( [ config.sources.scripts ] )
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
    function() { gulp.watch( [ config.sources.scripts, config.sources.tests ], [ 'test' ] ); }
);
