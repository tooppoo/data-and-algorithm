import { describe, expect } from 'vitest';
import { it, fc } from '@fast-check/vitest';
import { selectingSort } from './practice_2.2';

describe('insrt sort', () => {
  it.prop([fc.array(fc.integer())])('should sort array correctly', (arr) => {
    const sorted = [...arr].sort((a, b) => a - b);

    expect(selectingSort(arr)).toEqual(sorted);
  });
});
