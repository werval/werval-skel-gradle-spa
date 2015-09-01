/*global require, describe, it*/
"use strict";

var assert = require('assert');

describe( 'example suite',  function() {
    it( 'passes', function( done ) {
        assert.equal( 42, 42 );
        done();
    } );
} );
