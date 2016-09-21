/* global describe, it */

import { expect } from 'chai';
import xMarksTheSpot from '../12-xMarksTheSpot/12-xMarksTheSpot';

describe.only('xMarksTheSpot', function () {
  it('exists', function () {
    expect(xMarksTheSpot).to.be.a('function');
  });
  it('takes one argument', function () {
    expect(xMarksTheSpot.length).to.equal(1);
  });
  it('returns an array', function () {
    expect(xMarksTheSpot([])).to.be.an('array');
  });
  it('returns empty array if x is not present', function () {
    expect(xMarksTheSpot([
      ['a','b','c']
    ])).to.eql([]);
  });
  it('returns [1, 1]', function () {
    expect(xMarksTheSpot([
      ['o','o','o'],
      ['o','x','o']
    ])).to.eql([1, 1]);
  });
  it('returns [3, 2]', function () {
    expect(xMarksTheSpot([
      ['o', 'o', 'o'],
      ['o', 'o', 'o'],
      ['o', 'o', 'o'],
      ['o', 'o', 'x']
    ])).to.eql([3, 2]);
  });
});