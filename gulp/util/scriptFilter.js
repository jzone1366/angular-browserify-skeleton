'use strict';

var path = require('path');

var scriptFilter = function(name) {

  return /(\.(js)$)/i.test(path.extname(name));
};

module.exports = scriptFilter;
