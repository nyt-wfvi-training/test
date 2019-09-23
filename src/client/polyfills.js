// kyt supported file - you may add more polyfills
// Magically adds es6+ features via `@babel/preset-env` `useBuiltIns` option.

// React environment requirements for old IE:
// https://reactjs.org/docs/javascript-environment-requirements.html
import 'core-js/es6/map';
import 'core-js/es6/set';
import 'core-js/es6/symbol';
import 'core-js/es6/string';
import 'core-js/modules/es6.array.for-each';
import 'core-js/modules/es6.array.find';
import 'core-js/modules/es7.object.entries';
import 'regenerator-runtime/runtime';
