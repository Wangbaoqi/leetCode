import { ListNode, sortList, sortListII } from './code';

const printLink = (head: ListNode | null): number[] => {
  const res: number[] = [];
  for (let node = head; node != null; node = node.next) {
    res.push(node.val);
  }
  return res;
};

describe('test sort linkList', () => {
  it('test_normal_sort_link_list', () => {
    const head = new ListNode(
      1,
      new ListNode(5, new ListNode(3, new ListNode(4, new ListNode(0))))
    );
    const head1 = new ListNode(
      1,
      new ListNode(5, new ListNode(3, new ListNode(4, new ListNode(0))))
    );
    const print = printLink(sortList(head));
    const print1 = printLink(sortListII(head1));
    const result = [0, 1, 3, 4, 5];
    expect(print).toEqual(result);
    expect(print1).toEqual(result);
  });

  it('test_even_sort_link_list', () => {
    const head = new ListNode(
      1,
      new ListNode(5, new ListNode(3, new ListNode(4)))
    );
    const head1 = new ListNode(
      1,
      new ListNode(5, new ListNode(3, new ListNode(4)))
    );
    const print = printLink(sortList(head));
    const print1 = printLink(sortListII(head1));
    const result = [1, 3, 4, 5];
    expect(print).toEqual(result);
    expect(print1).toEqual(result);
  });
});
