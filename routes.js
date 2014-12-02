'use strict';

var articles = require('./data');

var all = function(req, res) {
  res.json(articles.data);
};

module.exports = {
  all: all
};
