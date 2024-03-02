#!/usr/bin/node
const Utils = {
  calculateNumber: (type, a, b) => {
    let obj = {
      SUM: () => {
        return Math.round(a) + Math.round(b);
      },
      SUBTRACT: () => {
        return Math.round(a) - Math.round(b);
      },
      DIVIDE: () => {
        if (Math.round(b) === 0) {
          return 'Error';
        }
        return Math.round(a) / Math.round(b);
      },
    };
    return obj[type]();
  },
};
module.exports = Utils;
