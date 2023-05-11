
import { ListNode, middleNode, middleNodeI } from './876.链表的中间结点';

describe('test middleNode', () => { 

  it('test_odd_node_linkList', () => {
    const head = new ListNode(1);
    const node = new ListNode(2);
    const node1 = new ListNode(3);
    const node2 = new ListNode(4);
    const node3 = new ListNode(5);

    head.next = node;
    node.next = node1;
    node1.next = node2;
    node2.next = node3;

    expect(middleNodeI(head)).toEqual(node1);
  });

  it('test_even_node_linkList', () => {
    const head = new ListNode(1);
    const node = new ListNode(2);
    const node1 = new ListNode(3);
    const node2 = new ListNode(4);
    const node3 = new ListNode(5);
    const node4 = new ListNode(6);

    head.next = node;
    node.next = node1;
    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    expect(middleNodeI(head)).toEqual(node2);
  });

  it('test_one_node_linkList', () => { 
    const head = new ListNode(1);
    expect(middleNodeI(head)).toEqual(head);
  })
})