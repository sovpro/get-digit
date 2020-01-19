"use strict"
module.exports = getDigit

function getDigit (digit, val) {
  if (val === null) return
  let num = Math.abs (val)
  if (isNaN (num) || num === Infinity) return
  while (digit-- > 0) {
    num /= 10
    if (digit === 0) {
      num -= num >> 0
      return num * 10 >> 0
    }   
  }
}
