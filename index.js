/*!
 * is-dir-like-path | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/is-dir-like-path
*/
'use strict';

const path = require('path');

const inspectWithKind = require('inspect-with-kind');

function isDirLikePathCore(filePath, pathObj) {
  if (typeof filePath !== 'string') {
    throw new TypeError(`Expected a file path, but got ${inspectWithKind(filePath)}.`);
  }

  return pathObj.normalize(filePath).endsWith(pathObj.sep);
}

module.exports = function isDirLikePath(filePath) {
  return isDirLikePathCore(filePath, path);
};

module.exports.posix = function isDirLikePathPosix(filePath) {
  return isDirLikePathCore(filePath, path.posix);
};

module.exports.win32 = function isDirLikePathWin32(filePath) {
  return isDirLikePathCore(filePath, path.win32);
};
