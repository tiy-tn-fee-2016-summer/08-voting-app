'use strict';

/* global require */

QUnit.module('Voting');

const calculatePercent = require('voting/calculate-percent');
const totalVotes = require('voting/total-votes');
const percentVotes = require('voting/percent-votes');
const addOption = require('voting/add-option');
const incrementVote = require('voting/increment-vote');

test('it can calculate percent from a fraction', (assert) => {
  const result = calculatePercent(1, 1);
  const resultTwo = calculatePercent(1, 2);
  const resultThree = calculatePercent(1, 3);

  assert.equal(result, '100%', 'Calculate full percentage');
  assert.equal(resultTwo, '50%', 'Calculate even fractions');
  assert.equal(resultThree, '33%', 'Calculate and use Math.round');
});

test('it can add up the sum of total votes from a list of choices', (assert) => {
  const result = totalVotes([{ votes: 1 }]);
  const resultTwo = totalVotes([{ votes: 2 }]);
  const resultThree = totalVotes([{ votes: 12 }, { votes: 3 }]);

  assert.equal(result, 1, 'Calculate simple total votes');
  assert.equal(resultTwo, 2, 'Calculate votes for a single option');
  assert.equal(resultThree, 15,
    'Calculate votes for two or more options (use a for loop and collector)');
});

test('it can get the percentage of votes for am option given an options\'s index', (assert) => {
  const result = percentVotes([{ votes: 1 }], 0);
  const resultTwo = percentVotes([{ votes: 2 }], 0);
  const resultThree = percentVotes([{ votes: 12 }, { votes: 3 }], 1);

  assert.equal(result, '100%', 'Calculate simple percentage votes');
  assert.equal(resultTwo, '100%', 'Calculate simple percentage votes');
  assert.equal(resultThree, '20%',
    'Calculate percentage for two or more options ' +
    '(calculatePercent and totalVotes will be useful)');
});

test('it can add an option to the poll', (assert) => {
  const start = [{ name: 'Foo', votes: 0 }];
  const result = addOption(start, 'Bar');
  const resultTwo = addOption([{ name: 'Foo', votes: 0 }, { name: 'Bar', votes: 0 }], 'Baz');

  assert.deepEqual(start, [{ name: 'Foo', votes: 0 }], 'Don\'t change the value of passed in array');
  assert.deepEqual(result, [{ name: 'Foo', votes: 0 }, { name: 'Bar', votes: 0 }],
    'Returns a NEW array with the new option tacked on the end' +
    '(use a loop and collector to build an array)');
  assert.deepEqual(resultTwo, [{ name: 'Foo', votes: 0 }, { name: 'Bar', votes: 0 }, { name: 'Baz', votes: 0 }],
    'Returns a NEW array with the new option tacked on the end' +
    '(use a loop and collector to build an array)');
});

test('it can increment the votes for an option in the poll', (assert) => {
  const start = [{ name: 'Foo', votes: 0 }];
  const result = incrementVote(start, 0);
  const resultTwo = incrementVote([{ name: 'Foo', votes: 1 }, { name: 'Bar', votes: 2 }], 1);

  assert.deepEqual(start, [{ name: 'Foo', votes: 0 }], 'Don\'t change the value of passed in array');
  assert.deepEqual(result, [{ name: 'Foo', votes: 1 }]);
  assert.deepEqual(resultTwo, [{ name: 'Foo', votes: 1 }, { name: 'Bar', votes: 3 }]);
});
