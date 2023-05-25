

import { rotate1, rotate2 } from './189.轮转数组';


describe('rotate array', () => {

  it('normal rotate', () => {
    const arr = [1, 2, 3, 4, 5];
    const k = 2;
    rotate1(arr, k);
    expect(arr).toEqual([4, 5, 1, 2, 3])
  })
})