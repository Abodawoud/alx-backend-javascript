
const expect = require('chai').expect;
const calculateNumber = require('./1-calcul.js');

//'Normal function below .5'
expect(calculateNumber('SUM', 1, 2)).to.equal(3);
expect(calculateNumber('SUM', 1.1, 2.2)).to.equal(3);
expect(calculateNumber('SUBTRACT', 1.1, 2.2)).to.equal(-1);
expect(calculateNumber('DIVIDE', 1.1, 2.2)).to.equal(0.5);

// Normal function above .5
expect(calculateNumber('SUM', 1.5, 2.5)).to.equal(5);
expect(calculateNumber('SUBTRACT', 1.5, 2.5)).to.equal(-1);
expect(calculateNumber('DIVIDE', 2.5, 1.5)).to.equal(1.5);

// should return 'Error' when the a = 1.5 b = 0.2
expect(calculateNumber('DIVIDE', 1.5, 0.2)).to.equal('Error');

// should return 0 when the a = 0 b = 1
expect(calculateNumber('DIVIDE', 0, 1)).to.equal(0);

// should return 'Error' when the a = -1.5 b = -0.2
expect(calculateNumber('DIVIDE', -1.5, -0.2)).to.equal('Error');

// should return -3 when the a = -1.5 b = -2.5
expect(calculateNumber('SUM', -1.5, -2.5)).to.equal(-3);

// should return 1 when the a = -1.5 b = -2.5
expect(calculateNumber('SUBTRACT', -1.5, -2.5)).to.equal(1);

// should return 1 when the a = 2.5 b = 1.5
expect(calculateNumber('SUBTRACT', 2.5, 1.5)).to.equal(1);

// should return 0.5 when the a = -1.5 b = -2.5
expect(calculateNumber('DIVIDE', -1.5, -2.5)).to.equal(0.5);

// should return 0 when the a = 1 b = 1
expect(calculateNumber('SUBTRACT', 1, 1)).to.equal(0);

// should return -4 when the a = 1.4 b = 4.5
expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);

// 'Missing Values'
expect(calculateNumber('DIVIDE', -1.5)).to.be.NaN;
expect(calculateNumber('SUM', -1.5)).to.be.NaN;

expect(() => calculateNumber('SU', 1, 2)).to.throw(TypeError);
