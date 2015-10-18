var lastChar = require('../lib');
var assert = require('assert');

describe('last-char', function () {
  it('should return with the last char of the given string',
    function () {
      assert.equal(lastChar('foo'), 'o');
      assert.equal(lastChar('bar'), 'r');
      assert.equal(lastChar('baz'), 'z');
    });
  it('should just work if the given argument is an empty string', function () {
    assert.equal(lastChar(''), '');
  });
  it('should throw type error if the given argument is not a string', function () {
    assert.throws(function () {
      lastChar(1);
    }, TypeError);
    assert.throws(function () {
      lastChar({});
    }, TypeError);
    assert.throws(function () {
      lastChar([]);
    }, TypeError);
    assert.throws(function () {
      lastChar(true);
    }, TypeError);
    assert.throws(function () {
      lastChar(function () {});
    }, TypeError);
    assert.throws(function () {
      lastChar(undefined);
    }, TypeError);
    assert.throws(function () {
      lastChar(null);
    }, TypeError);
  });
});
