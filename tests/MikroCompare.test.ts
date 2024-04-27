import { test, expect } from 'vitest';

import { MikroCompare } from '../src/domain/MikroCompare.js';

const compare = new MikroCompare();

/**
 * POSITIVE TESTS
 */
test('It should do an "is" comparison', () => {
  const expected = true;

  const result = compare.is('abc', 'abc');

  expect(result).toBe(expected);
});

test('It should do a positive "exists" comparison', () => {
  const expected = true;

  const result = compare.exists('abc', true);

  expect(result).toBe(expected);
});

test('It should do a undefined "exists" comparison', () => {
  const expected = true;

  // @ts-ignore
  const result = compare.exists(false, false);

  expect(result).toBe(expected);
});

test('It should do a negative "exists" comparison', () => {
  const expected = true;

  // @ts-ignore
  const result = compare.exists(undefined, false);

  expect(result).toBe(expected);
});

test('It should do a "moreThan" comparison', () => {
  const expected = true;

  const result = compare.moreThan(4, 2);

  expect(result).toBe(expected);
});

test('It should do a "moreThanOrEqual" comparison', () => {
  const expected = true;

  const result = compare.moreThanOrEqual(4, 4);

  expect(result).toBe(expected);
});

test('It should do a "lessThan" comparison', () => {
  const expected = true;

  const result = compare.lessThan(4, 8);

  expect(result).toBe(expected);
});

test('It should do a "lessThanOrEqual" comparison', () => {
  const expected = true;

  const result = compare.lessThanOrEqual(4, 4);

  expect(result).toBe(expected);
});

test('It should do a case-sensitive "contains" comparison', () => {
  const expected = false;

  const result = compare.contains(
    ['something here', 'a DarK day was ahead', 'heroic laziness'],
    'dark',
    true
  );

  expect(result).toBe(expected);
});

test('It should do a non-case-sensitive "contains" comparison', () => {
  const expected = true;

  const result = compare.contains(
    ['something here', 'a DarK day was ahead', 'heroic laziness'],
    'dark'
  );

  expect(result).toBe(expected);
});

test('It should do a case-sensitive "includes" comparison', () => {
  const expected = false;

  const result = compare.includes('a DarK day was ahead', 'dark', true);

  expect(result).toBe(expected);
});

test('It should do a non-case-sensitive "includes" comparison', () => {
  const expected = true;

  const result = compare.includes('a DarK day was ahead', 'dark');

  expect(result).toBe(expected);
});

test('It should do a case-sensitive "startsWith" comparison', () => {
  const expected = false;

  const result = compare.startsWith('Philips light bulb', 'philips', true);

  expect(result).toBe(expected);
});

test('It should do a non-case-sensitive "startsWith" comparison', () => {
  const expected = true;

  const result = compare.startsWith('Philips light bulb', 'philips');

  expect(result).toBe(expected);
});

test('It should do a case-sensitive "endsWith" comparison', () => {
  const expected = false;

  const result = compare.endsWith('BigMac', 'mac', true);

  expect(result).toBe(expected);
});

test('It should do a non-case-sensitive "endsWith" comparison', () => {
  const expected = true;

  const result = compare.endsWith('BigMac', 'mac');

  expect(result).toBe(expected);
});
