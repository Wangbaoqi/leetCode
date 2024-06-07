import { ListNode, insert } from './code';

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
    if (node && node.next == head) node.next = null;
    res.push(node.val);
  }
  return res;
};

describe('test sortedCircularLink', () => {
  it('test_normal_link', () => {
    const head = new ListNode(3);
    const node = new ListNode(4);
    const node1 = new ListNode(1);

    head.next = node;
    node.next = node1;
    node1.next = head;

    const result = insert(head, 2);
    expect(printLink(result)).toEqual([3, 4, 1, 2]);
  });
});
