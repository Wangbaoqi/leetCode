import { ListNode, pairSumII } from './code';

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

describe('test maximumTwinNodes', () => {
  it('test_two_nodes', () => {
    const head = new ListNode(1, new ListNode(10000));
    expect(pairSumII(head)).toBe(10001);
  });

  it('test_two_nodes', () => {
    const head = new ListNode(
      5,
      new ListNode(4, new ListNode(2, new ListNode(1)))
    );
    expect(pairSumII(head)).toBe(6);
  });

  it('test_multi_nodes', () => {
    const testArr = [
      7, 57, 13, 31, 17, 65, 32, 3, 97, 22, 7, 20, 69, 35, 69, 75, 13, 33, 50,
      80, 64, 71, 15, 28, 2, 27, 39, 48, 13, 22, 84, 5, 51, 46, 26, 78, 56, 63
    ];
    const head = generateLink(testArr);
    expect(pairSumII(head)).toBe(130);
  });
});
