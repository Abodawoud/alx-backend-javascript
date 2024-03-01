#!/usr/bin/node
const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber()', function () {
  describe('Normal function below .5', function () {
    it(`should return 3 when the a = 1.1 b = 2.2`, function () {
      assert.strictEqual(calculateNumber('SUM', 1.1, 2.2), 3);
    });
    it(`should return 1 when the a = 1.1 b = 2.2`, function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.1, 2.2), 1);
    });
    it(`should return 0.5 when the a = 1.1 b = 2.2`, function () {
      assert.strictEqual(calculateNumber('DIVIDE', 1.1, 2.2), 0.5);
    });
  });

  describe('Normal function above .5', function () {
    it(`should return 5 when the a = 1.5 b = 2.5`, function () {
      assert.strictEqual(calculateNumber('SUM', 1.5, 2.5), 5);
    });
    it(`should return 1 when the a = 1.5 b = 2.5`, function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 2.5), 1);
    });
    it(`should return 1.5 when the a = 2.5 b = 1.5`, function () {
      assert.strictEqual(calculateNumber('DIVIDE', 2.5, 1.5), 1.5);
    });
  });

  describe('Output: ERROR', function () {
    it(`should return 'Error' when the a = 1.5 b = 0.2`, function () {
      assert.strictEqual(calculateNumber('DIVIDE', 1.5, 0.2), 'Error');
    });
  });

  describe('Negative Values', function () {
    it(`should return 'Error' when the a = -1.5 b = -0.2`, function () {
      assert.strictEqual(calculateNumber('DIVIDE', -1.5, -0.2), 'Error');
    });
    it(`should return -3 when the a = -1.5 b = -2.5`, function () {
      assert.strictEqual(calculateNumber('SUM', -1.5, -2.5), -3);
    });
    it(`should return -1 when the a = -1.5 b = -2.5`, function () {
      assert.strictEqual(calculateNumber('SUBTRACT', -1.5, -2.5), -1);
    });
    it(`should return -1 when the a = 2.5 b = 1.5`, function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.5, 1.5), -1);
    });
    it(`should return 0.5 when the a = -1.5 b = -2.5`, function () {
      assert.strictEqual(calculateNumber('DIVIDE', -1.5, -2.5), 0.5);
    });
  });

  describe('Missing Values', function () {
    it(`should return NaN when the a = 1.1 b = ???`, function () {
      assert.strictEqual(calculateNumber('DIVIDE', -1.5), NaN);
    });

    it(`should return NaN when the a = 1.1 b = ???`, function () {
      assert.strictEqual(calculateNumber('SUM', -1.5), NaN);
    });
  });
});
