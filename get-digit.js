"use strict"
const getDigitBase10 = getDigit.bind (null, 10)
getDigitBase10.base = getDigitBase
module.exports = getDigitBase10

function getDigitBase (base, digit, val) {
  if (isNaN (base) || base === null ||
      base < 2 || base > 36) return
  return getDigit (base, digit, val)
}

function getDigit (base, digit, val) {
  if (digit === 0) return
  if (val === null) return
  let num = Math.abs (val)
  if (isNaN (num) || num === Infinity) return
  if (digit === 1) return num % base
  if (base === 2) return (num >> (digit - 1) & 1)
  while (digit-- > 0) {
    num /= base
    if (digit === 0) {
      return Math.trunc ((num - Math.trunc (num)) * base)
    }
  }
}
