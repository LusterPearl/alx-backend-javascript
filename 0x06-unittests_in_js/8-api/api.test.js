const request = require('request');
const { expect } = require('chai');
const app = require('./api'); // Import the app for testing

describe('Index page', () => {
  const baseUrl = 'http://localhost:7865';

  before((done) => {
    app.listen(7865, done); // Start the server before running tests
  });

  it('Correct status code?', (done) => {
    request.get(baseUrl, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result?', (done) => {
    request.get(baseUrl, (err, res, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
