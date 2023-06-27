import {
  ListNode,
  reorderList_violence,
  reorderList_linearTable,
} from './index';

describe('test reOrder listLink', () => {
  it('test_case_normal_first_linear', () => {
    const head = new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
    );
    reorderList_linearTable(head);
    expect(head.val).toEqual(1);
    expect(head.next.val).toEqual(5);
    expect(head.next.next.val).toEqual(2);
    expect(head.next.next.next.val).toEqual(4);
    expect(head.next.next.next.next.val).toEqual(3);
  });

  it('test_case_normal_first_violence', () => {
    const head = new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
    );
    reorderList_violence(head);
    expect(head.val).toEqual(1);
    expect(head.next.val).toEqual(5);
    expect(head.next.next.val).toEqual(2);
    expect(head.next.next.next.val).toEqual(4);
    expect(head.next.next.next.next.val).toEqual(3);
  });

  it('test_case_normal_second_linear', () => {
    const head = new ListNode(1, new ListNode(2, new ListNode(3)));
    reorderList_linearTable(head);
    expect(head.val).toEqual(1);
    expect(head.next.val).toEqual(3);
    expect(head.next.next.val).toEqual(2);
  });

  it('test_case_normal_second_violence', () => {
    const head = new ListNode(1, new ListNode(2, new ListNode(3)));
    reorderList_violence(head);
    expect(head.val).toEqual(1);
    expect(head.next.val).toEqual(3);
    expect(head.next.next.val).toEqual(2);
  });
});
