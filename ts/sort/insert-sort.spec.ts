import { describe, expect } from 'vitest';
import { it, fc } from '@fast-check/vitest';
import { insertSort } from './insert-sort';

describe('insrt sort', () => {
  it.prop([fc.array(fc.integer())])('should sort array correctly', (arr) => {
    const sorted = [...arr].sort((a, b) => a - b);

    expect(insertSort(arr)).toEqual(sorted);
  });
});