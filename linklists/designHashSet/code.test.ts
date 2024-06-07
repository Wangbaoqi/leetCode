import { MyHashSet } from './code';

describe('test MyHashSet', () => {
  it('test_hashSet_operator_add_container', () => {
    const hashSet = new MyHashSet();
    hashSet.add(1);
    expect(hashSet.contains(1)).toBeTruthy();

    hashSet.add(2);
    expect(hashSet.contains(2)).toBeTruthy();
  });

  it('test_hashSet_operator_add_remove', () => {
    const hashSet = new MyHashSet();
    hashSet.add(1);
    hashSet.add(2);
    expect(hashSet.contains(1)).toBeTruthy();
    hashSet.remove(1);
    expect(hashSet.contains(1)).toBeFalsy();
  });
});
