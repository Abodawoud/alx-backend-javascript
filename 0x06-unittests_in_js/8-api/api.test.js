#!/usr/bin/node
// api.test.js

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./api');

const { expect } = chai;

chai.use(chaiHttp);

describe('Index page', () => {
  it('should return status code 200', (done) => {
    chai.request(app)
      .get('/')
      .end((_, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('should return "Welcome to the payment system"', (done) => {
    chai.request(app)
      .get('/')
      .end((_, res) => {
        expect(res.text).to.equal('Welcome to the payment system');
        done();
      });
  });
});
