#!/usr/bin/node
const request = require('request');
const { expect } = require('chai');

describe('home', () => {
  it('should return status code 200', (done) => {
    request('http://localhost:7865', (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should return "Welcome to the payment system"', (done) => {
    request('http://localhost:7865', (err, res, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('should return status code 404 for non_existing route', (done) => {
    request('http://localhost:7865/non_existing', (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});

describe('cart route', () => {
  it('should return status code 200', (done) => {
    request('http://localhost:7865/cart/12', (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should return Payment methods for cart 12', (done) => {
    request('http://localhost:7865/cart/12', (err, res, body) => {
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return status code 404 for non_existing route', (done) => {
    request('http://localhost:7865/cart/hello', (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});
