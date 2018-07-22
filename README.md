# is-dir-like-path

[![npm version](https://img.shields.io/npm/v/is-dir-like-path.svg)](https://www.npmjs.com/package/is-dir-like-path)
[![Build Status](https://travis-ci.org/shinnn/is-dir-like-path.svg?branch=master)](https://travis-ci.org/shinnn/is-dir-like-path)
[![Build status](https://ci.appveyor.com/api/projects/status/19440q8twr9rt808/branch/master?svg=true)](https://ci.appveyor.com/project/ShinnosukeWatanabe/is-dir-like-path/branch/master)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/is-dir-like-path.svg)](https://coveralls.io/github/shinnn/is-dir-like-path)

Check if a given `string` looks like a directory path

```javascript
const isDirLikePath = require('is-dir-like-path');

isDirLikePath('foo'); //=> false
isDirLikePath('foo/'); //=> true
```

## Installation

[Use](https://docs.npmjs.com/cli/install) [npm](https://docs.npmjs.com/getting-started/what-is-npm).

```
npm install is-dir-like-path
```

## API

```javascript
const isDirLikePath = require('is-dir-like-path');
```

### isDirLikePath(*str*)

*str*: `string` (path)  
Return: `boolean`

It returns `true` if the last character of a given string is equal to [`path.sep`](https://nodejs.org/api/path.html#path_path_sep).

```javascript
// On POSIX
isDirLikePath('dir\\'); //=> false

// On Windows
isDirLikePath('dir\\'); //=> true
```

### isDirLikePath.posix(*str*)

*str*: `string` (path)  
Return: `boolean`

Always interact in a [posix](https://www.opengroup.org/austin/papers/posix_faq.html) compatible way.

```javascript
isDirLikePath.posix('dir\\'); //=> false
```

### isDirLikePath.win32(*str*)

*str*: `string` (path)  
Return: `boolean`

```javascript
isDirLikePath.win32('dir\\'); //=> true
```

Always interact in a [win32](https://msdn.microsoft.com/library/cc433218) compatible way.

## License

[ISC License](./LICENSE) © 2018 Shinnosuke Watanabe
