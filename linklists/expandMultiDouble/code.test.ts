import { ListNode, flatten_for, flatten } from './code';

export const printLink = (head: ListNode | null): number[] => {
  const res: number[] = [];
  for (let node = head; node != null; node = node.next) {
    res.push(node.val);
  }
  return res;
};

describe('test flatten linkList', () => {
  it('test_normal_linkList', () => {
    const head = new ListNode(1);
    const node1 = new ListNode(2, head);
    const node2 = new ListNode(3, node1);
    const node3 = new ListNode(4, node2);

    head.next = node1;
    node1.next = node2;
    node3.next = node3;

    // 1 2 3 4
    //     10 11 12
    //        21 22 23

    const head1 = new ListNode(10, node1);
    const node4 = new ListNode(11, head1);
    const node5 = new ListNode(12, node4);

    node2.child = head1;
    head1.next = node4;
    node4.next = node5;

    const head2 = new ListNode(20, node4);
    const node6 = new ListNode(21, head2);
    const node7 = new ListNode(22, node6);

    node4.child = head2;
    head2.next = node6;
    node6.next = node7;

    const resultLinkList = flatten_for(head);
    const resultLinkList1 = flatten(head);

    const result1 = printLink(resultLinkList);
    const result2 = printLink(resultLinkList1);

    expect(result1).toEqual([1, 2, 3, 10, 11, 20, 21, 22, 12]);
    expect(result2).toEqual([1, 2, 3, 10, 11, 20, 21, 22, 12]);
  });
});
