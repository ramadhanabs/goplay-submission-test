import { describe, it, expect } from 'vitest';
import {
  arrayOfColor,
  arrayToCollection,
  generateArrayofColor,
} from '../colorGenerator';
import { numberToText } from '../numberToText';
import { getUnsplashSource } from '../linkGenerator';

describe('Color generator function test', () => {
  const array = ['a', 'b', 'c', 'd', 'e', 'f'];

  it('should return exact 512 color length', () => {
    expect(arrayOfColor(512)).toHaveLength(512);
  });

  it('#', () => {
    const obj = arrayToCollection(array, 2);
    const arrayOfKeys = Object.keys(obj);
    expect(arrayOfKeys).toHaveLength(3);
  });

  it('#', () => {
    const obj = generateArrayofColor();
    const arrayOfKeys = Object.keys(obj);

    expect(arrayOfKeys).toHaveLength(8);
  });
});

describe('Number to text function test', () => {
  it('should return nothing when no input', () => {
    expect(numberToText()).toBe(undefined);
  });
  it('should return converted number to words', () => {
    expect(numberToText(1000)).toBe('one thousand');
  });
});

describe('Link generator function test', () => {
  const url = 'https://unsplash.com/photos/yC-Yzbqy7PY';
  const expected = 'https://source.unsplash.com/yC-Yzbqy7PY/500x500';

  it('should return converted unsplash url', () => {
    expect(getUnsplashSource(url)).toBe(expected);
  });
});
