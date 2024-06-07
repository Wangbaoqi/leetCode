import { MyHashMap } from './code';

describe('test MyHashSet', () => {
  it('test_hashSet_operator_add_container', () => {
    const hashSet = new MyHashMap();
    hashSet.put(1, 1);
    expect(hashSet.get(1)).toBe(1);

    hashSet.put(2, 1);
    hashSet.put(1, 3);
    expect(hashSet.get(2)).toBe(1);
    expect(hashSet.get(1)).toBe(3);
  });

  it('test_hashSet_operator_put_remove', () => {
    const hashSet = new MyHashMap();
    hashSet.put(1, 1);
    hashSet.put(2, 1);
    hashSet.put(1, 3);

    expect(hashSet.get(1)).toBe(3);
    hashSet.remove(1);
    expect(hashSet.get(1)).toBe(-1);
  });
});
