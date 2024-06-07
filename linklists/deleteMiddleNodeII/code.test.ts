import { ListNode, deleteMiddle } from './code';

const printLink = (head: ListNode | null): number[] => {
  const res: number[] = [];
  for (let node = head; node != null; node = node.next) {
    res.push(node.val);
  }
  return res;
};

describe('test delete middle nodeII', () => {
  it('test_odd_delete_middle_II', () => {
    const head = new ListNode(
      1,
      new ListNode(
        3,
        new ListNode(
          4,
          new ListNode(7, new ListNode(1, new ListNode(2, new ListNode(6))))
        )
      )
    );

    const result = deleteMiddle(head);
    expect(printLink(result)).toEqual([1, 3, 4, 1, 2, 6]);
  });

  it('test_even_delete_middle_II', () => {
    const head = new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4)))
    );
    const result = deleteMiddle(head);
    expect(printLink(result)).toEqual([1, 2, 4]);
  });

  it('test_less_two_node_II', () => {
    const head = new ListNode(1, new ListNode(2));
    const result = deleteMiddle(head);
    expect(printLink(result)).toEqual([1]);
  });

  it('test_less_one_node', () => {
    const head = new ListNode(1);
    const result = deleteMiddle(head);
    expect(printLink(result)).toEqual([]);
  });
});
