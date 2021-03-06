/* global exports */
"use strict";

// module Test.Spec.Console

function hasProcessWrite() {
  try {
    return process &&
        process.stdout &&
        typeof process.stdout.write === 'function'
  }
  catch(e) {
    return false
  }
}

exports.write = function(s) {
  return function () {
    if (hasProcessWrite()) {
      try {
        process.stdout.write(s);
      }
      catch (e) {}
    }
  };
};

// This needs a foreign function to support the escape sequence.
exports._setAttr = function (codeStr) {
  return exports.write("\x1b[" + codeStr + "m");
};
