import { ListNode, deleteNode } from './index';

describe('test deleteNodeII', () => {
  it('test_normal_list', () => {
    const head = new ListNode(1);
    const node = new ListNode(2);
    const node1 = new ListNode(3);
    const node2 = new ListNode(4);

    head.next = node;
    node.next = node1;
    node1.next = node2;

    deleteNode(node);

    expect(head.val).toEqual(1);
    expect(head.next.val).toEqual(3);
    expect(head.next.next.val).toEqual(4);
  });
});
