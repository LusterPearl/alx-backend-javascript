// 5-payment.test.js
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;

  beforeEach(() => {
    // Spy on console.log to verify the correct output
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Restore console.log to its original state
    consoleSpy.restore();
  });

  it('should call sendPaymentRequestToApi with 100 and 20, and log the correct total', () => {
    sendPaymentRequestToApi(100, 20);

    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWith('The total is: 120')).to.be.true;
  });

  it('should call sendPaymentRequestToApi with 10 and 10, and log the correct total', () => {
    sendPaymentRequestToApi(10, 10);

    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWith('The total is: 20')).to.be.true;
  });
});
