'use strict';

/* global require */

QUnit.module('Array helpers');

const sameFirst = require('array-helpers/same-first');
const deepEquals = require('array-helpers/deep-equals');
const arraySum = require('array-helpers/array-sum');

test('It can check first values', (assert) => {
  const a = sameFirst(['b', true], ['b', true]);
  const b = sameFirst(['b', true], ['b', false]);
  const c = sameFirst(['d', true], ['b', true]);
  const d = sameFirst(['d', true], ['b', false]);
  const e = sameFirst(['d', true], ['c', false, 'x']);

  assert.equal(a, true, 'It returns true when the first values are the same');
  assert.equal(b, true, 'It returns true when the first values are the same');
  assert.equal(c, false, 'It returns false when the first values are different');
  assert.equal(d, false, 'It returns false when the first values are different');
  assert.equal(e, false, 'It returns false when the first values are different');
});

test('It can check deep equal', (assert) => {
  const a = deepEquals(['b', true], ['b', true]);
  const b = deepEquals(['b', true], ['b', false]);
  const c = deepEquals([2, 7], [2, 7]);
  const d = deepEquals(['d', true], ['z', true]);
  const e = deepEquals(['d', true], ['d', true, 'x']);

  assert.equal(a, true, 'It returns true when all the values are the same in both arrays');
  assert.equal(b, false, 'It returns false when the second item is differet');
  assert.equal(c, true, 'It returns true when all the values are the same in both arrays');
  assert.equal(d, false, 'It returns false when ANY item is different');
  assert.equal(e, false, 'It returns false if the lengths are different');
});

test('It can sum up an array', (assert) => {
  const a = arraySum([1, 5, 10]);
  const b = arraySum([1, 50, 1000, 10]);

  assert.equal(a, 16);
  assert.equal(b, 1061);
});
