/* global describe, it */

import { expect } from 'chai';
import middleCharacter from '../05-middleCharacter/05-middleCharacter';

describe('middleCharacter', function () {
  it('exists', function () {
    expect(middleCharacter).to.be.a('function');
  });
  it('takes one argument', function () {
    expect(middleCharacter.length).to.equal(1);
  });
  it('returns "h" when "h" is passed', function () {
    expect(middleCharacter('h')).to.equal('h');
  });
  it('returns "hi" when "hi" is passed', function () {
    expect(middleCharacter('hi')).to.equal('hi');
  });
  it('returns "l" when "hello" is passed', function () {
    expect(middleCharacter('hello')).to.equal('l');
  });
  it('returns "ll" when "yellow" is passed', function () {
    expect(middleCharacter('yellow')).to.equal('ll');
  });
  it('returns " " when "boot camp" is passed', function () {
    expect(middleCharacter('boot camp')).to.equal(' ');
  });
});