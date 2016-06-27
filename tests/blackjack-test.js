'use strict';

/* global require */

QUnit.module('Blackjack');

const cardValue = require('blackjack/card-value');
const cardSum = require('blackjack/card-sum');
const shouldSplit = require('blackjack/should-split');
const shouldHit = require('blackjack/should-hit');
const selectAction = require('blackjack/select-action');

test('A bot knows a card value', (assert) => {
  const ace = cardValue('ace');
  const five = cardValue('5');
  const nine = cardValue('9');
  const ten = cardValue('10');
  const jack = cardValue('jack');
  const queen = cardValue('queen');
  const king = cardValue('queen');

  assert.equal(ace, 11, 'A bot should know "ace" is equal to 11');
  assert.equal(five, 5, 'A bot should know "5" is equal to 5');
  assert.equal(nine, 9, 'A bot should know "9" is equal to 9');
  assert.equal(ten, 10, 'A bot should know "10" is equal to 10');
  assert.equal(jack, 10, 'A bot should know "jack" is equal to 10');
  assert.equal(queen, 10, 'A bot should know "queen" is equal to 10');
  assert.equal(king, 10, 'A bot should know "king" is equal to 10');
});

test('A bot knows how to add two numbers', (assert) => {
  const a = cardSum(1, 3);
  const b = cardSum(10, 20);
  const c = cardSum(10000, 200);

  assert.equal(a, 4);
  assert.equal(b, 30);
  assert.equal(c, 10200);
});

test('A bot knows when to split', (assert) => {
  const aceFive = shouldSplit('ace', '5');
  const aceAce = shouldSplit('ace', 'ace');
  const aceSeven = shouldSplit('ace', '7');
  const aceJack = shouldSplit('ace', 'jack');
  const dubSevens = shouldSplit('7', '7');

  assert.equal(aceFive, false, 'A bot cannot split this. Cards Ace & 5');
  assert.equal(aceAce, true, 'A bot splits on doubles. Cards Ace & Ace');
  assert.equal(aceSeven, false, 'A bot cannot split this. Cards Ace & Seven');
  assert.equal(aceJack, false, 'A bot cannot split this. Cards Ace & Jack');
  assert.equal(dubSevens, true, 'A bot splits on doubles. Cards Seven & Seven');
});

test('A bot knows when to hit', (assert) => {
  const aceFive = shouldHit('ace', '5');
  const aceAce = shouldHit('ace', 'ace');
  const aceSeven = shouldHit('ace', '7');
  const aceJack = shouldHit('ace', 'jack');

  assert.equal(aceFive, true, 'A bot should hit when less than 17. Cards Ace & 5');
  assert.equal(aceAce, false, 'A bot should not hit when it should split. Cards Ace & Ace');
  assert.equal(aceSeven, false, 'A bot should not hit when greater than 17. Cards Ace & Seven');
  assert.equal(aceJack, false, 'A bot should not hit on natural 21. Cards Ace & Jack');
});

test('A bot knows what it should do', (assert) => {
  const aceFive = selectAction('ace', '5');
  const aceAce = selectAction('ace', 'ace');
  const aceSeven = selectAction('ace', '7');
  const aceJack = selectAction('ace', 'jack');
  const dubSevens = selectAction('7', '7');

  assert.equal(aceFive, 'hit', 'Cards Ace & 5');
  assert.equal(aceAce, 'split', 'Cards Ace & Ace');
  assert.equal(aceSeven, 'stay', 'Cards Ace & Seven');
  assert.equal(aceJack, 'stay', 'Cards Ace & Jack');
  assert.equal(dubSevens, 'split', 'Cards Seven & Seven');
});
