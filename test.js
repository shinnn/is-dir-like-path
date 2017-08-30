'use strict';

const {resolve} = require('path');

const isDirLikePath = require('.');
const tap = require('tap');

tap.test('isDirPathPath', t => {
  t.equal(
    isDirLikePath('foo/'),
    true,
    'should return `true` if the string looks like a directory path.'
  );

  t.equal(
    isDirLikePath(resolve('/0', '1/2/3/4.txt')),
    false,
    'should support absolute path.'
  );

  t.equal(
    isDirLikePath(''),
    false,
    'should return `false` if it takes an empty string.'
  );

  t.throws(
    () => isDirLikePath(Buffer.from('a')),
    new TypeError('Expected a file path, but got <Buffer 61>.'),
    'should throw a type error when it takes a non-string argument.'
  );

  t.throws(
    () => isDirLikePath(),
    new TypeError('Expected a file path, but got undefined.'),
    'should throw a type error when it takes no arguments.'
  );

  t.end();
});

tap.test('isDirLikePath.posix', t => {
  t.strictEqual(
    isDirLikePath.posix('1\\2\\'),
    false,
    'should always treat the path in a posix compatible way.'
  );

  t.end();
});

tap.test('isDirLikePath.win32', t => {
  t.equal(
    isDirLikePath.win32('1\\2\\'),
    true,
    'should always treat the path in a win32 compatible way.'
  );

  t.end();
});
