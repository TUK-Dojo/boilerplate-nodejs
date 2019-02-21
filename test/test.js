/* global it, describe, beforeEach, afterEach  */
import chai from 'chai';
import sinon from 'sinon';

import testCode from '../src/sample-src';

const { expect } = chai;

let sandbox;

beforeEach(() => {
  sandbox = sinon.createSandbox();
});

afterEach(() => {
  sandbox.restore();
});

describe('Test code', () => {
  it('should return the expected result', () => {
    expect(testCode(2, 2)).to.equal(4);
  });
});
