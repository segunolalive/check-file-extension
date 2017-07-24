const assert = require('assert');
const cfe = require('./cfe.js');


function test(description, fn, file, expected) {
  console.log("TEST: ", description);
  let actual = fn(file);
  assert.equal(actual, expected, `Expected ${expected} \nGot ${actual} instead}`);
  console.log("passed test");
}

test('returns file extension', cfe, 'a/w/e/s/o/me/file.txt', '.txt');
