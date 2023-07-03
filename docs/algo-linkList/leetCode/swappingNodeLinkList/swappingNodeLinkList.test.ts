import { ListNode, swapNodes } from './index';

const printLink = (head: ListNode | null): number[] => {
  const res: number[] = [];
  for (let node = head; node != null; node = node.next) {
    res.push(node.val);
  }
  return res;
};

describe('ListNode swap node test', () => {
  it('test_node_not_adjacent', () => {
    const head = new ListNode(
      1,
      new ListNode(
        2,
        new ListNode(
          3,
          new ListNode(4, new ListNode(5, new ListNode(6, new ListNode(7))))
        )
      )
    );
    const result = swapNodes(head, 2);
    expect(printLink(result)).toEqual([1, 6, 3, 4, 5, 2, 7]);
  });

  it('test_node_adjacent', () => {
    const head = new ListNode(
      1,
      new ListNode(
        2,
        new ListNode(
          3,
          new ListNode(4, new ListNode(5, new ListNode(6, new ListNode(7))))
        )
      )
    );
    const result = swapNodes(head, 4);
    expect(printLink(result)).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  it('test_node_equal_adjacent', () => {
    const head = new ListNode(
      1,
      new ListNode(
        2,
        new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))
      )
    );
    const result = swapNodes(head, 3);
    expect(printLink(result)).toEqual([1, 2, 4, 3, 5, 6]);
  });

  it('test_less_node_adjacent', () => {
    const head = new ListNode(1, new ListNode(2));
    const result = swapNodes(head, 1);
    expect(printLink(result)).toEqual([2, 1]);
  });
});
