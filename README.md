# is-dir-like-path

[![NPM version](https://img.shields.io/npm/v/is-dir-like-path.svg)](https://www.npmjs.com/package/is-dir-like-path)
[![Build Status](https://travis-ci.org/shinnn/is-dir-like-path.svg?branch=master)](https://travis-ci.org/shinnn/is-dir-like-path)
[![Build status](https://ci.appveyor.com/api/projects/status/19440q8twr9rt808/branch/master?svg=true)](https://ci.appveyor.com/project/ShinnosukeWatanabe/is-dir-like-path/branch/master)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/is-dir-like-path.svg)](https://coveralls.io/r/shinnn/is-dir-like-path)
[![devDependency Status](https://david-dm.org/shinnn/is-dir-like-path/dev-status.svg)](https://david-dm.org/shinnn/is-dir-like-path#info=devDependencies)

Check if a given string looks like a directory path

```javascript
const isDirLikePath = require('is-dir-like-path');

isDirLikePath('foo'); //=> false
isDirLikePath('foo/'); //=> true
```

## Installation

[Use npm.](https://docs.npmjs.com/cli/install)

```
npm install is-dir-like-path
```

## API

```javascript
const isDirLikePath = require('is-dir-like-path');
```

### isDirLikePath(*str*)

*str*: `String` (path)  
Return: `Boolean`

It returns `true` if the last character of a given string is equal to [`path.sep`](https://nodejs.org/api/path.html#path_path_sep).

```javascript
// On POSIX
isDirLikePath('dir\\'); //=> false

// On Windows
isDirLikePath('dir\\'); //=> true
```

### isDirLikePath.posix(*str*)

*str*: `String` (path)  
Return: `Boolean`

Always interact in a [posix](https://www.opengroup.org/austin/papers/posix_faq.html) compatible way.

```javascript
isDirLikePath('dir\\'); //=> false
```

### isDirLikePath.win32(*str*)

*str*: `String` (path)  
Return: `Boolean`

```javascript
isDirLikePath('dir\\'); //=> true
```

Always interact in a [win32](https://msdn.microsoft.com/library/cc433218) compatible way.

## License

Copyright (c) 2015 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
