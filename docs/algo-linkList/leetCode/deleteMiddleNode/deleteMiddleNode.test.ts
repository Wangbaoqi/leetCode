
import { ListNode, deleteNode } from ".";


describe('test deleteNode', () => { 

  it('test_normal_deleteNode', () => { 

    const head = new ListNode(1);
    const node = new ListNode(2);
    const node1 = new ListNode(3);

    head.next = node;
    node.next = node1;

    const expected = head;
    expected.next = node1;

    expect(deleteNode(head)).toEqual(expected);

  })
})