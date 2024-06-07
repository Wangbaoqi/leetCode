import { ListNode, splitListToParts } from './code';

export const printLink = (head: ListNode | null): number[] => {
  const res: number[] = [];
  for (let node = head; node != null; node = node.next) {
    res.push(node.val);
  }
  return res;
};

describe('test_splitList', () => {
  it('test_empty', () => {
    const head = null;
    const result = splitListToParts(head, 2);
    expect(result).toEqual([null, null]);
  });

  it('test_even_nodes', () => {
    const head = new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4)))
    );
    const result = splitListToParts(head, 2);
    const res = result.map((node) => printLink(node));
    expect(res).toEqual([
      [1, 2],
      [3, 4]
    ]);
  });

  it('test_odd_nodes', () => {
    const head = new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
    );
    const result = splitListToParts(head, 2);
    const res = result.map((node) => printLink(node));
    expect(res).toEqual([
      [1, 2, 3],
      [4, 5]
    ]);
  });
});
