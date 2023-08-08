import { AllOne, ListNode } from './index';

describe('test allOneData', () => {
  it('test_normal_operations', () => {
    const all = new AllOne();

    all.inc('hello');
    all.inc('hello');

    let maxKey = all.getMaxKey();

    // expect(maxKey).toEqual('hello');
  });
});
