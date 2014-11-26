'use strict';

var gulp        = require( 'gulp' );
var fs          = require( 'fs' );
var del         = require( 'del' );
var config      = require( './config' );

gulp.task(
    'clean',
    function( done )
    {
        del( [ config.build.root ], done );
    }
);

fs.readdirSync( './gulp/tasks/' ).forEach(
    function( task )
    {
        require( './tasks/' + task );
    }
);

gulp.task( 'default', [ 'build' ] );
