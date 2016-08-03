/* global describe, it */

import { expect } from 'chai';
import findMissing from '../00b-findMissing/00b-findMissing';

describe('findMissing', function () {
  it('should be a function', function () {
    expect(findMissing).to.be.a('function');
  });
  it('takes one argument', function () {
    expect(findMissing.length).to.equal(1);
  });
  it('returns a number', function () {
    expect(findMissing([])).to.be.a('number');
  });
  it('returns 5 for [1, 2, 3, 4, 6, 7, 8, 9, 10]', function () {
    expect(findMissing([1, 2, 3, 4, 6, 7, 8, 9, 10])).to.equal(5);
  });
  it('returns 1 for [2, 3, 4, 5, 6, 7, 8, 9, 10]', function () {
    expect(findMissing([2, 3, 4, 5, 6, 7, 8, 9, 10])).to.equal(1);
  });
});