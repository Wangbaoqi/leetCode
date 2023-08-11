import { LFUCache } from './index';

describe('test LFUCache', () => {
  it('test_normal_operation', () => {
    const lfu = new LFUCache(2);
    lfu.put(1, 1);
    lfu.put(2, 2);
    expect(lfu.get(1)).toBe(1);
    lfu.put(3, 3);
    expect(lfu.get(2)).toBe(-1);
    expect(lfu.get(3)).toBe(3);
    lfu.put(4, 4);
    expect(lfu.get(4)).toBe(4);
  });
});
