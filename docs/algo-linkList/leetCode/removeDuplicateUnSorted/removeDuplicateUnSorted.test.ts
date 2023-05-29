
import { ListNode, removeDuplicateNodes } from '.'


describe('test removeDuplicateNodes unSortable', () => { 

  it('test_duplicate_nodes', () => {

    const head = new ListNode(1);
    const node = new ListNode(2);
    const node1 = new ListNode(3);
    const node2 = new ListNode(2);
    const node3 = new ListNode(1);
    
    head.next = node;
    node.next = node1;
    node1.next = node2;
    node2.next = node3

    const expected = head;
    expected.next = node;
    node.next = node1;
    node1.next = null;

    expect(removeDuplicateNodes(head)).toEqual(expected);
  });

  it('test_before_duplicate_nodes', () => {
    const head = new ListNode(1);
    const node = new ListNode(1);
    const node1 = new ListNode(1);
    const node2 = new ListNode(1);
    const node3 = new ListNode(2);
    
    head.next = node;
    node.next = node1;
    node1.next = node2;
    node2.next = node3

    const expected = head;
    expected.next = node3;
    node3.next = null;

    expect(removeDuplicateNodes(head)).toEqual(expected);
  });

})