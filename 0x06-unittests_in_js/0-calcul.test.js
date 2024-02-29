#!/usr/bin/node
const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber()', function () {
  describe('Normal rounded number', function () {
    it(`should return 3 when the a = 1.1 b = 2.2`, function () {
      assert.strictEqual(calculateNumber(1.1, 2.2), 3);
    });

    it(`should return 5 when the a = 1.5 b = 2.5`, function () {
      assert.strictEqual(calculateNumber(1.5, 2.5), 5);
    });

    it(`should return 3 when the a = 1 b = 2`, function () {
      assert.strictEqual(calculateNumber(1, 2), 3);
    });
  });

  describe('Missing Values', function () {
    it(`should return NaN when the a = 1.1 b = ???`, function () {
      assert.strictEqual(calculateNumber(1.1, ), NaN);
    });

    it(`should return NaN with one value`, function () {
      assert.strictEqual(calculateNumber(1.1), NaN);
    });

    it(`should return NaN both a, b has no value`, function () {
      assert.strictEqual(calculateNumber(), NaN);
    });
  });

  describe('Negative Values', function () {
    it(`should return -3 when the a = -1 b = -2`, function () {
      assert.strictEqual(calculateNumber(-1, -2), -3);
    });

    it(`should return -3 when a = -1.5 b = -2.5`, function () {
      assert.strictEqual(calculateNumber(-1.5, -2.5), -3);
    });

    it(`should return -3 when a = -1.2 b = -2.2`, function () {
      assert.strictEqual(calculateNumber(-1.2, -2.2), -3);
    });
  });
});
