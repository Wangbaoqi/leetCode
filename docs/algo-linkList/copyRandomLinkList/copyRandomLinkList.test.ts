
import { ListNode, copyRandomList } from './138.复制带随机指针的链表';



describe('test_copyRandomList', () => { 

  it('test_copy_random_list_all_random_null', () => {
    const head = new ListNode(1);
    const node1 = new ListNode(2);
    const node2 = new ListNode(3);

    head.next = node1;
    node1.next = node2;

    expect(copyRandomList(head)).toEqual(head);
  });

  it('test_copy_random_list_has_random', () => { 
    const head = new ListNode(1);
    const node1 = new ListNode(2);
    const node2 = new ListNode(3);

    head.next = node1;

    node1.next = node2;
    node1.random = head;
    expect(copyRandomList(head)).toEqual(head);

  })
})