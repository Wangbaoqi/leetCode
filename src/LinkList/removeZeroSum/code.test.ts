import { ListNode, removeZeroSumSublists } from './code';

const generateLink = (arr: number[]) => {
  const dummy = new ListNode(-1);

  let node = dummy;
  let len = arr.length;
  let i = 0;

  while (i < len) {
    node.next = new ListNode(arr[i++]);
    node = node.next;
  }

  return dummy.next;
};

export const printLink = (head: ListNode | null): number[] => {
  const res: number[] = [];
  for (let node = head; node != null; node = node.next) {
    res.push(node.val);
  }
  return res;
};

describe('test removeZeroSumSublists', () => {
  it('test_removeZeroSumSublists_node1', () => {
    const head = generateLink([1, 2, -3, 3, 1]);
    const ans = removeZeroSumSublists(head);
    expect(printLink(ans)).toEqual([3, 1]);
  });

  it('test_removeZeroSumSublists_node2', () => {
    const head = generateLink([1, 2, 3, -3, 4]);
    const ans = removeZeroSumSublists(head);
    expect(printLink(ans)).toEqual([1, 2, 4]);
  });

  it('test_removeZeroSumSublists_node3', () => {
    const head = generateLink([1, 2, 3, -3, -2]);
    // prefix = 0, seen = {0: 0}
    // prefix = 1, seen = {0: 0, 1: 1}
    // prefix = 3, seen = {0: 0, 1: 1, 3: 2}
    // prefix = 6, seen = {0: 0, 1: 1, 3: 2, 6: 3}
    // prefix = 3, seen = {0: 0, 1: 1, 3: -3, 6: 3}
    // prefix = 1, seen = {0: 0, 1: -2, 3: -3, 6: 3}

    // prefix = 0; node.next = 1
    // prefix = 1; node.next = null
    const ans = removeZeroSumSublists(head);
    expect(printLink(ans)).toEqual([1]);
  });
});
