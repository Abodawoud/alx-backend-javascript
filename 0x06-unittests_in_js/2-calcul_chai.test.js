#!/usr/bin/node
const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber()', function () {
  describe('Normal function below .5', function () {
    it(`should return 3 when the a = 1 b = 2`, function () {
      expect(calculateNumber('SUM', 1, 2)).to.equal(3);
    });
    it(`should return 3 when the a = 1.1 b = 2.2`, function () {
      expect(calculateNumber('SUM', 1.1, 2.2)).to.equal(3);
    });
    it(`should return 1 when the a = 1.1 b = 2.2`, function () {
      expect(calculateNumber('SUBTRACT', 1.1, 2.2)).to.equal(-1);
    });
    it(`should return 0.5 when the a = 1.1 b = 2.2`, function () {
      expect(calculateNumber('DIVIDE', 1.1, 2.2)).to.equal(0.5);
    });
  });

  describe('Normal function above .5', function () {
    it(`should return 5 when the a = 1.5 b = 2.5`, function () {
      expect(calculateNumber('SUM', 1.5, 2.5)).to.equal(5);
    });
    it(`should return 1 when the a = 1.5 b = 2.5`, function () {
      expect(calculateNumber('SUBTRACT', 1.5, 2.5)).to.equal(-1);
    });
    it(`should return 1.5 when the a = 2.5 b = 1.5`, function () {
      expect(calculateNumber('DIVIDE', 2.5, 1.5)).to.equal(1.5);
    });
  });

  describe('Output: ERROR', function () {
    it(`should return 'Error' when the a = 1.5 b = 0.2`, function () {
      expect(calculateNumber('DIVIDE', 1.5, 0.2)).to.equal('Error');
    });
    it(`should return 0 when the a = 0 b = 1`, function () {
      expect(calculateNumber('DIVIDE', 0, 1)).to.equal(0);
    });
  });

  describe('Negative Values', function () {
    it(`should return 'Error' when the a = -1.5 b = -0.2`, function () {
      expect(calculateNumber('DIVIDE', -1.5, -0.2)).to.equal('Error');
    });
    it(`should return -3 when the a = -1.5 b = -2.5`, function () {
      expect(calculateNumber('SUM', -1.5, -2.5)).to.equal(-3);
    });
    it(`should return -1 when the a = -1.5 b = -2.5`, function () {
      expect(calculateNumber('SUBTRACT', -1.5, -2.5)).to.equal(1);
    });
    it(`should return -1 when the a = 2.5 b = 1.5`, function () {
      expect(calculateNumber('SUBTRACT', 2.5, 1.5)).to.equal(1);
    });
    it(`should return 0.5 when the a = -1.5 b = -2.5`, function () {
      expect(calculateNumber('DIVIDE', -1.5, -2.5)).to.equal(0.5);
    });
    it(`should return 0.5 when the a = -1.5 b = -2.5`, function () {
      expect(calculateNumber('SUBTRACT', 1, 1)).to.equal(0);
    });
    it(`should return 0.5 when the a = -1.5 b = -2.5`, function () {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
  });

  describe('Missing Values', function () {
    it(`should return NaN when the a = 1.1 b = ???`, function () {
      expect(calculateNumber('DIVIDE', -1.5)).to.be.NaN;
    });

    it(`should return NaN when the a = 1.1 b = ???`, function () {
      expect(calculateNumber('SUM', -1.5)).to.be.NaN;
    });

    it(`should throw TypeError`, function () {
      expect(() => calculateNumber('SU', 1, 2)).to.throw(TypeError);
    });
  });
});
