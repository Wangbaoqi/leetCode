import { ListNode, swapPairs } from './code';

describe('test swapPairs', () => {
  it('test_normalize_four_node', () => {
    const head = new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4)))
    );

    const result = new ListNode(
      2,
      new ListNode(1, new ListNode(4, new ListNode(3)))
    );

    expect(swapPairs(head)).toEqual(result);
  });

  it('test_empty_node', () => {
    expect(swapPairs(null)).toBeNull();
  });

  it('test_one_node', () => {
    const head = new ListNode(1);
    expect(swapPairs(head)).toEqual(head);
  });

  it('test_odd_node', () => {
    const head = new ListNode(1, new ListNode(2, new ListNode(3)));
    const result = new ListNode(2, new ListNode(1, new ListNode(3)));
    expect(swapPairs(head)).toEqual(result);
  });
});
