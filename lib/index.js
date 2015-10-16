/**
 * LastChar
 * Returns the last character of the provided string.
 *
 * @name LastChar
 * @function
 * @param {String} input The input string.
 * @return {String} The last character of the provided string.
 */
function LastChar(input) {
    if (typeof input !== "string") {
      throw new TypeError("Expected a string.");
    }
    return input.slice(-1);
}

module.exports = LastChar;
