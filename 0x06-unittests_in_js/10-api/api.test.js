const request = require('supertest');
const { expect } = require('chai');
const app = require('./api');

describe('Login endpoint', () => {
  it('should return the welcome message with the correct username', async () => {
    const response = await request(app)
      .post('/login')
      .send({ userName: 'Alice' });
    expect(response.status).to.equal(200);
    expect(response.text).to.equal('Welcome Alice');
  });
});

describe('Available Payments endpoint', () => {
  it('should return the correct payment methods', async () => {
    const response = await request(app).get('/available_payments');
    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal({
      payment_methods: {
        credit_cards: true,
        paypal: false
      }
    });
  });
});
