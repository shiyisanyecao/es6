'use strict';

function add(a, b) {
  if (a == 0) {
    throw new Error('A is Error');
  }
  return a + b;
}
console.log(add(0, 2));
