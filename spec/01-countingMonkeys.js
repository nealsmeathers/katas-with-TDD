/* global describe, it */

import { expect } from 'chai';
import countingMonkeys from '../01-countingMonkeys/02-countingMonkeys';

describe('countingMonkeys', function () {
  it('should be a function', function () {
    expect(countingMonkeys).to.be.a('function');
  });
  it('takes one argument', function () {
    expect(countingMonkeys.length).to.equal(1);
  });
  it('returns an array', function () {
    expect(countingMonkeys()).to.be.an('array');
  });
  it('returns [1, 2, 3, 4] if 4 is passed', function () {
    expect(countingMonkeys(4)).to.eql([1, 2, 3, 4]);
  });
});