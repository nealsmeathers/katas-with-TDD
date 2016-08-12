/* global describe, it */

import { expect } from 'chai';
import isStringUppercase from '../02-isStringUppercase/02-isStringUppercase';

describe('isStringUppercase', function () {
  it('should be a function', function () {
    expect(isStringUppercase).to.be.a('function');
  });
});