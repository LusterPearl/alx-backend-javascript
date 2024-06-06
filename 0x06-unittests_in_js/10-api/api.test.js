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

describe('Cart page', () => {
  const baseUrl = 'http://localhost:7865/cart';

  it('Correct status code when :id is a number?', (done) => {
    request.get(`${baseUrl}/12`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result when :id is a number?', (done) => {
    request.get(`${baseUrl}/12`, (err, res, body) => {
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('Correct status code when :id is NOT a number?', (done) => {
    request.get(`${baseUrl}/hello`, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});

describe('Available payments page', () => {
  const baseUrl = 'http://localhost:7865/available_payments';

  it('Correct status code?', (done) => {
    request.get(baseUrl, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result?', (done) => {
    request.get(baseUrl, (err, res, body) => {
      const expectedBody = {
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      };
      expect(JSON.parse(body)).to.deep.equal(expectedBody);
      done();
    });
  });
});

describe('Login page', () => {
  const baseUrl = 'http://localhost:7865/login';

  it('Correct status code and result for POST /login', (done) => {
    const userName = { userName: 'Betty' };
    request.post({
      url: baseUrl,
      body: userName,
      json: true
    }, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });
});
