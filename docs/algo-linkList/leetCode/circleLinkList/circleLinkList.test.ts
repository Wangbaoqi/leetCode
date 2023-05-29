
import { hasCycle, ListNode } from ".";


describe('listLink hasCycle', () => { 

  it('test_normal_linkList', () => { 
    const head = new ListNode(-1);
    const node1 = new ListNode(0);
    const node2 = new ListNode(1);
    const node3 = new ListNode(2);
    const node4 = new ListNode(3);

    head.next = node1;
    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node2;

    expect(hasCycle(head)).toBeTruthy();
  })

  it('test_un_normal_linkList', () => { 
    const head = new ListNode(-1);
    const node1 = new ListNode(0);
    const node2 = new ListNode(1);
    const node3 = new ListNode(2);
    const node4 = new ListNode(3);

    head.next = node1;
    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    expect(hasCycle(head)).toBeFalsy();
  })

  it('test_one_linkList', () => {
    const node1 = new ListNode(0);
    expect(hasCycle(node1)).toBeFalsy();
  })

  it('test_two_lists_normal_linkList', () => { 
    const head = new ListNode(-1);
    const node1 = new ListNode(0);
    head.next = node1;
    node1.next = head;
    expect(hasCycle(head)).toBeTruthy();
  })
})