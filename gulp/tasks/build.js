'use strict';

var gulp        = require( 'gulp' );
var browserify  = require( 'browserify' );
var source      = require( 'vinyl-source-stream' );
var buffer      = require( 'vinyl-buffer' );
var uglify      = require( 'gulp-uglify' );
var sourcemaps  = require( 'gulp-sourcemaps' );
var less        = require( 'gulp-less' );
var path        = require( 'path' );
var config      = require( '../config' );

gulp.task(
    'index',
    function()
    {
        return gulp.src( path.join( config.sources.root, 'index.html' ) )
            .pipe( gulp.dest( config.build.root ) );
    }
);

gulp.task(
    'browserify',
    function()
    {
        var bundler = browserify({
            entries: config.scripts.entries,
            debug: true
        });
        var bundle = function()
        {
          return bundler.bundle()
              .pipe( source( config.scripts.bundle_name ) )
              .pipe( buffer() )
              .pipe( sourcemaps.init( { loadMaps: true } ) )
                  // Add transformation tasks to the pipeline here.
                  .pipe( uglify() )
              .pipe( sourcemaps.write( './' ) )
              .pipe( gulp.dest( config.scripts.dest ) );
        };
        return bundle();
    }
);

gulp.task(
    'styles',
    function()
    {
        return gulp.src( config.styles.entries )
            .pipe( sourcemaps.init() )
            .pipe( less( { compress: true } ) )
            .pipe( sourcemaps.write( './' ) )
            .pipe( gulp.dest( config.styles.dest ) );
    }
);

gulp.task( 'build', [ 'index', 'browserify', 'styles' ] );
