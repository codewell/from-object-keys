'use strict';

var fromObjectKeys = function fromObjectKeys() {
  for (var _len = arguments.length, keys = new Array(_len), _key = 0; _key < _len; _key++) {
    keys[_key] = arguments[_key];
  }

  return object => keys.map(key => object[key]);
};

module.exports = fromObjectKeys;
