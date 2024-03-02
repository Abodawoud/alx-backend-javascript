#!/usr/bin/node
const sinon = require('sinon');
const chai = require('chai');
const sendPaymentRequestToApi = require('./3-payment');
const expect = chai.expect;

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;
  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
  });
  afterEach(() => {
    consoleSpy.restore();
    
  });
  it('sendPaymentRequestToAPI with 100, and 20', () => {
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.calledWith('The total is: 120')).to.be.true;
  });

  it('sendPaymentRequestToAPI with 10, and 10', () => {
    sendPaymentRequestToApi(10, 10);
    expect(consoleSpy.calledWith('The total is: 20')).to.be.true;
  });
});
