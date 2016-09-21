/* global describe, it */

import { expect } from 'chai';
import surfaceAreaAndVolume from '../04-surfaceAreaAndVolume/04-surfaceAreaAndVolume';

describe('surfaceAreaAndVolume', function () {
  it('exists', function () {
    expect(surfaceAreaAndVolume).to.be.a('function');
  });
  it('takes one argument', function () {
    expect(surfaceAreaAndVolume.length).to.equal(1);
  });
  it('returns an object containing surfaceArea and Volume keys', function () {
    expect(surfaceAreaAndVolume({
      height: 10,
      width: 10,
      depth: 20
    })).to.eql({surfaceArea: 1000, volume: 2000});
  });
  it('returns an object containing surfaceArea and Volume keys', function () {
    expect(surfaceAreaAndVolume({
      height: 20,
      width: 20,
      depth: 40
    })).to.eql({surfaceArea: 4000, volume: 16000});
  });
  it('returns an object containing surfaceArea and Volume keys', function () {
    expect(surfaceAreaAndVolume({
      height: 2,
      width: 2,
      depth: 2
    })).to.eql({surfaceArea: 24, volume: 8});
  });
});
