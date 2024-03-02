#!/usr/bin/node
const chai = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

const expect = chai.expect;

describe('getPaymentTokenFromAPI()', () => {
  it('should return successful response from the API for success=true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        done();
      })
  });
});
