import { deleteNode, ListNode } from './18. 删除链表的节点';


describe('deleteNode', () => { 

  it('test_normal_link_delete', () => { 
    const head = new ListNode(
      4,
      new ListNode(
        5,
        new ListNode(
          1,
          new ListNode(9)
        )
      )
    );

    const expected = new ListNode(
      4,
      new ListNode(
        1,
        new ListNode(9)
      )
    );

    expect(deleteNode(head, 5)).toEqual(expected)
  })
})