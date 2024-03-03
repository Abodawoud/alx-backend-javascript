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
      expect(res.body).to.equal('Payment methods for cart 12');
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

describe('available_payments route', () => {
  it('should return status code 200', (done) => {
    request('http://localhost:7865/available_payments', (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should return available_payments', (done) => {
    request('http://localhost:7865/available_payments', (err, res, body) => {
      expect(JSON.parse(body)).to.deep.equal({
        payment_methods: { credit_cards: true, paypal: false },
      });
      done();
    });
  });
});

describe('login route', () => {
  it('should return status code 200', (done) => {
    request.post(
      'http://localhost:7865/login',
      { json: { userName: 'Betty' } },
      (err, res, body) => {
        expect(res.statusCode).to.equal(200);
        done();
      }
    );
  });

  it('should return Welcome message with username', (done) => {
    request.post(
      'http://localhost:7865/login',
      { json: { userName: 'Betty' } },
      (err, res, body) => {
        expect(body).to.equal('Welcome Betty');
        done();
      }
    );
  });
});
