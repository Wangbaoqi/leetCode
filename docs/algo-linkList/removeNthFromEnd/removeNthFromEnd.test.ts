
import { ListNode, removeNthFromEnd, removeNthFromEndII } from './19.删除链表的倒数第-n-个结点';


describe('test removeNthFromEnd', () => {

  it('test_removing_last_node', () => {
    const head = new ListNode(
      1,
      new ListNode(
        2,
        new ListNode(3)
      )
    );

    const expected = new ListNode(
      1,
      new ListNode(
        2,
      )
    );
    // expect(removeNthFromEnd(head, 1)).toEqual(expected);
    expect(removeNthFromEndII(head, 1)).toEqual(expected);
    
  });

  it('test_removing_first_node', () => {
    const head = new ListNode(
      1,
      new ListNode(
        2,
        new ListNode(3)
      )
    );

    const expected = new ListNode(
      2,
      new ListNode(
        3,
      )
    );
    // expect(removeNthFromEnd(head, 3)).toEqual(expected);
    expect(removeNthFromEndII(head, 3)).toEqual(expected);

  });

  it('test_removing_only_node', () => {
    const head = new ListNode(1);
    // expect(removeNthFromEnd(head, 1)).toBeNull();
    expect(removeNthFromEndII(head, 1)).toBeNull();

  });

  it('test_removing_mid_node', () => {
    const head = new ListNode(
      1,
      new ListNode(
        2,
        new ListNode(3)
      )
    );

    const expected = new ListNode(
      1,
      new ListNode(
        3,
      )
    );
    // expect(removeNthFromEnd(head, 2)).toEqual(expected);
    expect(removeNthFromEndII(head, 2)).toEqual(expected);
  })

})