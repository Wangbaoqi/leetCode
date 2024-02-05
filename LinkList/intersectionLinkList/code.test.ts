import { ListNode, getIntersectionNode } from './code';

describe('test intersection LinkList', () => {
  it('test_has_intersection_node', () => {
    const head = new ListNode(1);
    const head1 = new ListNode(9);

    const node = new ListNode(2);
    const node1 = new ListNode(3);
    const node2 = new ListNode(4);
    const node3 = new ListNode(5);
    const node4 = new ListNode(6);

    head.next = node;
    node.next = node1;
    node1.next = node2;
    node2.next = node3;

    head1.next = node4;
    node4.next = node;
    node.next = node1;
    node1.next = node2;
    node2.next = node3;

    expect(getIntersectionNode(head, head1)).toEqual(node);
  });

  it('test_has_no_intersection', () => {
    const head = new ListNode(1);
    const head1 = new ListNode(9);

    const node = new ListNode(2);
    const node1 = new ListNode(3);
    const node2 = new ListNode(4);
    const node3 = new ListNode(5);
    const node4 = new ListNode(6);

    head.next = node;
    node.next = node1;
    node1.next = node2;
    node2.next = node3;

    head1.next = node4;
    expect(getIntersectionNode(head, head1)).toEqual(null);
  });
});
