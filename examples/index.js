'use strict';

var MAX_SAFE_INTEGER = require( './../lib' );

var max = Math.pow( 2, 55 ),
	len = 100,
	val,
	i;

for ( i = 0; i < len; i++ ) {
	val = Math.round( Math.random() * max );
	if ( val > MAX_SAFE_INTEGER ) {
		console.log( 'Unsafe: %d', val );
	} else {
		console.log( 'Safe: %d', val );
	}
}
