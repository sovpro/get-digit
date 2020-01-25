"use strict";
const getDigit = require ('./../')
const assert = require ('assert')

let error_count = 0

function assertWithInfo (actual, expected, message) {
  process.stdout.write (message)
  try {
    assert.strictEqual (actual, expected, message)
    console.log (' ... OK')
  }
  catch (error) {
    console.log (' ... FAIL')
    console.error (error)
    error_count += 1
  }
}

process.once ('exit', function (code) {
  process.exit (Math.min (1, error_count))
})

assertWithInfo (
    getDigit (2, 456)
  , 5
  , 'The result digit 2 in 456 should be 5'
)

assertWithInfo (
    getDigit (0, 123)
  , undefined
  , 'The result digit 0 in 123 should be undefined'
)

assertWithInfo (
    getDigit (1, null)
  , undefined
  , 'The result digit 1 in null should be undefined'
)

assertWithInfo (
    getDigit (1, 123)
  , 3
  , 'The result digit 1 in 123 should be 3'
)

assertWithInfo (
    getDigit (5, Infinity)
  , undefined
  , 'The result digit 5 in Infinity should be undefined'
)

assertWithInfo (
    getDigit (2, 'Thing')
  , undefined
  , 'The result digit 2 in a non-number should be undefined'
)

assertWithInfo (
    getDigit (1, 1)
  , 1
  , 'The result digit 1 in 1 should be 1'
)

assertWithInfo (
    getDigit (2, 10)
  , 1
  , 'The result digit 2 in 10 should be 1'
)

assertWithInfo (
    getDigit (1, 10)
  , 0
  , 'The result digit 1 in 10 should be 0'
)

assertWithInfo (
    getDigit (1, 12)
  , 2
  , 'The result digit 1 in 12 should be 2'
)

assertWithInfo (
    getDigit (0, 12)
  , undefined
  , 'The result digit 0 in 12 should be undefined'
)

assertWithInfo (
    getDigit (10, 0)
  , 0
  , 'The result digit 10 in 0 should be 0'
)
