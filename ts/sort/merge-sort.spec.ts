import { describe, expect } from 'vitest';
import { it, fc } from '@fast-check/vitest';
import { mergeSort } from './merge-sort';

describe('insrt sort', () => {
  it.prop([fc.array(fc.integer())])('should sort array correctly', (arr) => {
    const sorted = [...arr].sort((a, b) => a - b);

    expect(mergeSort(arr)).toEqual(sorted);
  });
});
