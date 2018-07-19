'use strict';

const path = require('path');

const inspectWithKind = require('inspect-with-kind');

function isDirLikePathCore(...args) {
	const argLen = args.length;

	if (argLen !== 2) {
		throw new RangeError(`Expected 1 argument (<string>), but got ${argLen - 1 || 'no'} arguments.`);
	}

	const [filePath, {normalize, sep}] = args;

	if (typeof filePath !== 'string') {
		throw new TypeError(`Expected a file path, but got ${inspectWithKind(filePath)}.`);
	}

	return normalize(filePath).endsWith(sep);
}

module.exports = function isDirLikePath(...args) {
	return isDirLikePathCore(...args, path);
};

module.exports.posix = function isDirLikePathPosix(...args) {
	return isDirLikePathCore(...args, path.posix);
};

module.exports.win32 = function isDirLikePathWin32(...args) {
	return isDirLikePathCore(...args, path.win32);
};
