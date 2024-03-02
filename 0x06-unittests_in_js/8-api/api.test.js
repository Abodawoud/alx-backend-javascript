#!/usr/bin/node
const request = require('request');
const app = require('./api');
const { expect } = require('chai');

describe('Index page', () => {
  it('should return status code 200', (done) => {
    request.get('http://localhost:7865', (_, res) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should return "Welcome to the payment system"', (done) => {
    request.get('http://localhost:7865', (_, res, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('should return status code 404 for non-existing route', (done) => {
    request.get('http://localhost:7865/non-existing-route', (_, res) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});
