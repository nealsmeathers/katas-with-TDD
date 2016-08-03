/* global describe, it */

import { expect } from 'chai';
import CalculateBill from '../00-calculateBill/00-calculateBill';

describe('CalculateBill', function () {
  it('should be a function', function () {
    expect(CalculateBill).to.be.a('function');
  });
  it('takes three arguments', function () {
    expect(CalculateBill.length).to.equal(3);
  });
  it('returns a string', function () {
    expect(CalculateBill(33.50)).to.be.a('string');
  });
  it('returns £135.00 for 100, 20 and 15', function () {
    expect(CalculateBill(100, 20, 15)).to.equal('£135.00');
  });
  it('returns £270.00 for 200, 20 and 15', function () {
    expect(CalculateBill(200, 20, 15)).to.equal('£270.00');
  });
  it('returns £540.00 for 400, 20 and 15', function () {
    expect(CalculateBill(400, 20, 15)).to.equal('£540.00');
  });
  it('it converts string inputs to numbers', function () {
    expect(CalculateBill('400', '20', '15')).to.equal('£540.00');
  });
});
