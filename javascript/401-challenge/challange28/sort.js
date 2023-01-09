'use strict';

function compareYearMade(a, b) {
  return b.year - a.year;
}

function compareTitle(a, b) {
  a = stripInfo(a.title);
  b = stripInfo(b.title);
  return a.localeCompare(b);
}

function stripInfo(title) {
  return title.replace(/^(a|an|the)\s/i, '');
}

module.exports = { compareYearMade, compareTitle };
