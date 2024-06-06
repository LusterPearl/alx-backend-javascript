const request = require('supertest');
const app = require('./api'); // Assuming your Express app is exported from api.js

describe('Cart page', () => {
  it('returns correct status code when :id is a number', async () => {
    const response = await request(app).get('/cart/12');
    expect(response.status).toEqual(200);
  });

  it('returns correct result when :id is a number', async () => {
    const response = await request(app).get('/cart/12');
    expect(response.text).toEqual('Payment methods for cart 12');
  });

  it('returns correct status code when :id is NOT a number', async () => {
    const response = await request(app).get('/cart/hello');
    expect(response.status).toEqual(404);
  });

  // Add more tests as needed
});
