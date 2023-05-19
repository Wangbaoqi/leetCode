
import { ListNode, getKthFromEnd } from "./返回倒数第 k 个节点";


describe('test getKthFromEnd', () => { 

  it('test_normal_kthFromEnd', () => { 

    const head = new ListNode(1);
    const node = new ListNode(2);
    const node1 = new ListNode(3);
    head.next = node;
    node.next = node1;

    const expected = head;
    expected.next = node;

    expect(getKthFromEnd(head, 3)).toEqual(head);
  })
})