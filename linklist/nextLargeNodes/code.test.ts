import { ListNode, nextLargerNodes } from './code';

export const printLink = (head: ListNode | null): number[] => {
  const res: number[] = [];
  for (let node = head; node != null; node = node.next) {
    res.push(node.val);
  }
  return res;
};

describe('test nextLargerNode', () => {
  it('test_normal_three_nodes', () => {
    const head = new ListNode(2, new ListNode(1, new ListNode(3)));
    const ans = nextLargerNodes(head);
    expect(ans).toEqual([3, 3, 0]);
  });

  it('test_normal_three_next_nodes', () => {
    const head = new ListNode(2, new ListNode(4, new ListNode(3)));
    const ans = nextLargerNodes(head);
    expect(ans).toEqual([4, 0, 0]);
  });

  it('test_normal_three_more_nodes', () => {
    const head = new ListNode(
      2,
      new ListNode(7, new ListNode(4, new ListNode(3, new ListNode(5))))
    );
    const ans = nextLargerNodes(head);
    expect(ans).toEqual([7, 0, 5, 5, 0]);
  });
});
