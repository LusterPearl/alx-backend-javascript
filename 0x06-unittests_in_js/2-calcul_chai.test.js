const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function() {
  it('should round the numbers and perform the specified operation', function() {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });

  it('should throw an error for invalid type', function() {
    expect(() => {
      calculateNumber('INVALID', 1.4, 4.5);
    }).to.throw(Error, 'Invalid type');
  });
});
