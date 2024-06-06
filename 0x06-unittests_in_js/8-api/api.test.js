// api.test.js
const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = chai;
const server = require('./api');  // This is your Express app

chai.use(chaiHttp);

describe('Index page', () => {
  let app;

  before((done) => {
    app = server.listen(7865, () => {
      console.log('Test server running on port 7865');
      done();
    });
  });

  after((done) => {
    app.close(() => {
      console.log('Test server stopped');
      done();
    });
  });

  it('should return status 200 and correct message for GET /', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Welcome to the payment system');
        done();
      });
  });

  // Add other tests here
});
