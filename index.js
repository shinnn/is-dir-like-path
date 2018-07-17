'use strict';

const path = require('path');

const inspectWithKind = require('inspect-with-kind');

function isDirLikePathCore(filePath, {normalize, sep}) {
	if (typeof filePath !== 'string') {
		throw new TypeError(`Expected a file path, but got ${inspectWithKind(filePath)}.`);
	}

	return normalize(filePath).endsWith(sep);
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
