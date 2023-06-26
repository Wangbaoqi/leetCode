import { ListNode, insertionSortList } from './index';

const printLink = (head: ListNode | null): number[] => {
  const res: number[] = [];
  for (let node = head; node != null; node = node.next) {
    res.push(node.val);
  }
  return res;
};

describe('test insertionSortList', () => {
  it('test_sorted_before_insertion', () => {
    const head = new ListNode(
      1,
      new ListNode(2, new ListNode(5, new ListNode(3)))
    );
    const printList = printLink(insertionSortList(head));
    expect(printList).toEqual([1, 2, 3, 5]);
  });

  it('test_sorted_before_insertion', () => {
    const head = new ListNode(
      2,
      new ListNode(1, new ListNode(5, new ListNode(3)))
    );
    const printList = printLink(insertionSortList(head));
    expect(printList).toEqual([1, 2, 3, 5]);
  });
});
