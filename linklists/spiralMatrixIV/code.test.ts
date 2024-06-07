import { ListNode, spiralMatrix } from './code';

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

describe('test spiral matrix', () => {
  it('test_normal_2_3', () => {
    const head = generateLink([3, 0, 2, 6, 8, 1, 7, 9, 4, 2, 5, 5, 0]);
    const result = spiralMatrix(3, 5, head);
    expect(result).toEqual([
      [3, 0, 2, 6, 8],
      [5, 0, -1, -1, 1],
      [5, 2, 4, 9, 7]
    ]);
  });

  it('test_normal_1_4', () => {
    const head = generateLink([0, 1, 2]);
    const result = spiralMatrix(1, 4, head);
    expect(result).toEqual([[0, 1, 2, -1]]);
  });
});
