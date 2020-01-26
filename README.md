# Get Digit

Get a digit value from an integer number.

[![Build status for Node.js 4.x and newer](https://github.com/sovpro/get-digit/workflows/Node.js%204.x%20and%20newer%20/badge.svg?branch=master)](https://github.com/sovpro/get-digit/commits/master)

```js
let value = getDigit (4, 123456789)
// value will be: 6
```

## Specify a base

```js
// get base 5 digit 3 from value 25
let value = getDigit.base (5, 3, 25)
// value will be: 1
```
