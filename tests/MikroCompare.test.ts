import test from 'ava';

import { MikroCompare } from '../src';

const compare = new MikroCompare();

/**
 * POSITIVE TESTS
 */
test('It should do an "is" comparison', (t) => {
  const expected = true;

  const result = compare.is('abc', 'abc');

  t.is(result, expected);
});

test('It should do a positive "exists" comparison', (t) => {
  const expected = true;

  const result = compare.exists('abc', true);

  t.is(result, expected);
});

test('It should do a undefined "exists" comparison', (t) => {
  const expected = true;

  // @ts-ignore
  const result = compare.exists(false, false);

  t.is(result, expected);
});

test('It should do a negative "exists" comparison', (t) => {
  const expected = true;

  // @ts-ignore
  const result = compare.exists(undefined, false);

  t.is(result, expected);
});

test('It should do a "moreThan" comparison', (t) => {
  const expected = true;

  const result = compare.moreThan(4, 2);

  t.is(result, expected);
});

test('It should do a "moreThanOrEqual" comparison', (t) => {
  const expected = true;

  const result = compare.moreThanOrEqual(4, 4);

  t.is(result, expected);
});

test('It should do a "lessThan" comparison', (t) => {
  const expected = true;

  const result = compare.lessThan(4, 8);

  t.is(result, expected);
});

test('It should do a "lessThanOrEqual" comparison', (t) => {
  const expected = true;

  const result = compare.lessThanOrEqual(4, 4);

  t.is(result, expected);
});

test('It should do a case-sensitive "contains" comparison', (t) => {
  const expected = false;

  const result = compare.contains(
    ['something here', 'a DarK day was ahead', 'heroic laziness'],
    'dark',
    true
  );

  t.is(result, expected);
});

test('It should do a non-case-sensitive "contains" comparison', (t) => {
  const expected = true;

  const result = compare.contains(
    ['something here', 'a DarK day was ahead', 'heroic laziness'],
    'dark'
  );

  t.is(result, expected);
});

test('It should do a case-sensitive "includes" comparison', (t) => {
  const expected = false;

  const result = compare.includes('a DarK day was ahead', 'dark', true);

  t.is(result, expected);
});

test('It should do a non-case-sensitive "includes" comparison', (t) => {
  const expected = true;

  const result = compare.includes('a DarK day was ahead', 'dark');

  t.is(result, expected);
});

test('It should do a case-sensitive "startsWith" comparison', (t) => {
  const expected = false;

  const result = compare.startsWith('Philips light bulb', 'philips', true);

  t.is(result, expected);
});

test('It should do a non-case-sensitive "startsWith" comparison', (t) => {
  const expected = true;

  const result = compare.startsWith('Philips light bulb', 'philips');

  t.is(result, expected);
});

test('It should do a case-sensitive "endsWith" comparison', (t) => {
  const expected = false;

  const result = compare.endsWith('BigMac', 'mac', true);

  t.is(result, expected);
});

test('It should do a non-case-sensitive "endsWith" comparison', (t) => {
  const expected = true;

  const result = compare.endsWith('BigMac', 'mac');

  t.is(result, expected);
});
