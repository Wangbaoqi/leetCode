import { ListNode, mergeInBetween } from './code';

const printLink = (head: ListNode | null): number[] => {
  const res: number[] = [];
  for (let node = head; node != null; node = node.next) {
    res.push(node.val);
  }
  return res;
};

describe('test_mergeInBetween', () => {
  it('test_normal_mergeInBetween_sorted', () => {
    const list1 = new ListNode(
      0,
      new ListNode(
        1,
        new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
      )
    );

    const list2 = new ListNode(100, new ListNode(200, new ListNode(300)));

    const result = mergeInBetween(list1, 3, 4, list2);
    expect(printLink(result)).toEqual([0, 1, 2, 100, 200, 300, 5]);
  });

  it('test_normal_mergeInBetween_unsorted', () => {
    const list1 = new ListNode(
      0,
      new ListNode(
        3,
        new ListNode(2, new ListNode(1, new ListNode(4, new ListNode(5))))
      )
    );

    const list2 = new ListNode(100, new ListNode(200, new ListNode(300)));

    const result = mergeInBetween(list1, 3, 4, list2);
    expect(printLink(result)).toEqual([0, 3, 2, 100, 200, 300, 5]);
  });
});
