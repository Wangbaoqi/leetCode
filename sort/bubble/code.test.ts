import { bubbleSort } from './code';

describe('test bubbleSort algorithm', () => {
  it('test_normal_bubbleSort', () => {
    const arr = [4, 2, 6, 5, 7, 1, 3];
    const result = bubbleSort(arr);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
});
