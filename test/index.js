var LastChar = require("../lib")
  , Assert = require("assert")
  ;

describe("last-char", function () {
  it("should return with the last char of the given string",
    function () {
      Assert.equal(LastChar("foo"), "o");
      Assert.equal(LastChar("bar"), "r");
      Assert.equal(LastChar("baz"), "z");
    });
  it("should just work if the given argument is an empty string", function () {
    Assert.equal(LastChar(""), "");
  });
  it("should throw type error if the given argument is not a string", function () {
    Assert.throws(function () {
      LastChar(1);
    }, TypeError);
    Assert.throws(function () {
      LastChar({});
    }, TypeError);
    Assert.throws(function () {
      LastChar([]);
    }, TypeError);
    Assert.throws(function () {
      LastChar(true);
    }, TypeError);
    Assert.throws(function () {
      LastChar(function () {});
    }, TypeError);
    Assert.throws(function () {
      LastChar(undefined);
    }, TypeError);
    Assert.throws(function () {
      LastChar(null);
    }, TypeError);
  });
});
