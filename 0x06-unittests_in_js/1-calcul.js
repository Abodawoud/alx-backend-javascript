#!/usr/bin/node
function calculateNumber(type, a, b) {
  let obj = {
    SUM: () => {
      return Math.round(a) + Math.round(b);
    },
    SUBTRACT: () => {
      return Math.round(b) - Math.round(a);
    },
    DIVIDE: () => {
      if (Math.round(b) === 0) {
        return 'Error';
      }
      return Math.round(a) / Math.round(b);
    },
  }

  return obj[type]();
}

module.exports = calculateNumber;
