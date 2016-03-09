MAX SAFE INTEGER
===
[![NPM version][npm-image]][npm-url] [![Build Status][build-image]][build-url] [![Coverage Status][coverage-image]][coverage-url] [![Dependencies][dependencies-image]][dependencies-url]

> Maximum safe [double-precision floating-point][ieee754] integer.


## Installation

``` bash
$ npm install compute-const-max-safe-integer
```


## Usage

``` javascript
var MAX_SAFE_INTEGER = require( 'compute-const-max-safe-integer' );
```

#### MAX_SAFE_INTEGER

The maximum [safe][safe-integers] [double-precision floating-point][ieee754] integer.

``` javascript
MAX_SAFE_INTEGER === Math.pow( 2, 53 ) - 1; // 9007199254740991
```


## Examples

``` javascript
var round = require( 'math-round' );
var pow = require( 'math-power' );
var MAX_SAFE_INTEGER = require( 'compute-const-max-safe-integer' );

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
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


---
## Tests

### Unit

This repository uses [tape][tape] for unit tests. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul][istanbul] as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


### Browser Support

This repository uses [Testling][testling] for browser testing. To run the tests in a (headless) local web browser, execute the following command in the top-level application directory:

``` bash
$ make test-browsers
```

To view the tests in a local web browser,

``` bash
$ make view-browser-tests
```

<!-- [![browser support][browsers-image]][browsers-url] -->


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015-2016. The [Compute.io][compute-io] Authors.


[npm-image]: http://img.shields.io/npm/v/compute-const-max-safe-integer.svg
[npm-url]: https://npmjs.org/package/compute-const-max-safe-integer

[build-image]: http://img.shields.io/travis/const-io/max-safe-integer/master.svg
[build-url]: https://travis-ci.org/const-io/max-safe-integer

[coverage-image]: https://img.shields.io/codecov/c/github/const-io/max-safe-integer-float64/master.svg
[coverage-url]: https://codecov.io/github/const-io/max-safe-integer-float64?branch=master

[dependencies-image]: http://img.shields.io/david/const-io/max-safe-integer.svg
[dependencies-url]: https://david-dm.org/const-io/max-safe-integer

[dev-dependencies-image]: http://img.shields.io/david/dev/const-io/max-safe-integer.svg
[dev-dependencies-url]: https://david-dm.org/dev/const-io/max-safe-integer

[github-issues-image]: http://img.shields.io/github/issues/const-io/max-safe-integer.svg
[github-issues-url]: https://github.com/const-io/max-safe-integer/issues

[tape]: https://github.com/substack/tape
[istanbul]: https://github.com/gotwarlost/istanbul
[testling]: https://ci.testling.com

[compute-io]: https://github.com/compute-io

[safe-integers]: http://www.2ality.com/2013/10/safe-integers.html
[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985
