'use strict';

var round = require( 'math-round' );
var pow = require( 'math-power' );
var MAX_SAFE_INTEGER = require( './../lib' );

var max;
var x;
var i;

max = pow( 2, 55 );
for ( i = 0; i < 100; i++ ) {
	x = round( Math.random() * max );
	if ( x > MAX_SAFE_INTEGER ) {
		console.log( 'Unsafe: %d', x );
	} else {
		console.log( 'Safe: %d', x );
	}
}
