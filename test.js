'use strong';

const path = require('path');

const isDirLikePath = require('.');
const tap = require('tap');

tap.test('isDirPathPath', t => {
  t.plan(6);

  t.strictEqual(isDirLikePath.name, 'isDirLikePath', 'should have a function name.');

  t.strictEqual(
    isDirLikePath('foo/'),
    true,
    'should return `true` if the string looks like a directory path.'
  );

  t.strictEqual(
    isDirLikePath(path.resolve('/0', '1/2/3/4.txt')),
    false,
    'should support absolute path.'
  );

  t.strictEqual(
    isDirLikePath(''),
    false,
    'should return `false` if it takes an empty string.'
  );

  t.throws(
    () => isDirLikePath(1),
    new TypeError('1 is not a string. Expected a file path.'),
    'should throw a type error when it takes a non-string argument.'
  );

  t.throws(
    () => isDirLikePath(),
    new TypeError('undefined is not a string. Expected a file path.'),
    'should throw a type error when it takes no arguments.'
  );
});

tap.test('isDirLikePath.posix', t => {
  t.plan(2);

  t.strictEqual(isDirLikePath.posix.name, 'isDirLikePathPosix', 'should have a function name.');

  t.strictEqual(
    isDirLikePath.posix('1\\2\\'),
    false,
    'should always treat the path in a posix compatible way.'
  );
});

tap.test('isDirLikePath.win32', t => {
  t.plan(2);

  t.strictEqual(isDirLikePath.win32.name, 'isDirLikePathWin32', 'should have a function name.');

  t.strictEqual(
    isDirLikePath.win32('1\\2\\'),
    true,
    'should always treat the path in a win32 compatible way.'
  );
});
