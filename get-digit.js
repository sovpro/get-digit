"use strict"
module.exports = getDigit

function getDigit (digit, val) {
  if (val === null) return
  let num = Math.abs (val)
  if (isNaN (num) || num === Infinity) return
  if (digit === 1) return num % 10
  while (digit-- > 0) {
    num /= 10
    if (digit === 0) {
      return (num - (num >> 0)) * 10 >> 0
    }
  }
}
