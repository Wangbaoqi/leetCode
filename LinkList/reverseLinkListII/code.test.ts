import { ListNode, reverseBetween, reverseBetweenII } from './code';

describe('test reverseBetween', () => {
  it('test_normal_reverse_link_list', () => {
    const head = new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
    );
    const head1 = new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
    );

    const expected = new ListNode(
      1,
      new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(5))))
    );
    expect(reverseBetween(head, 2, 4)).toEqual(expected);
    expect(reverseBetweenII(head1, 2, 4)).toEqual(expected);
  });

  it('test_before_reverse_link_list', () => {
    const head = new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
    );
    const head1 = new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
    );
    const expected = new ListNode(
      4,
      new ListNode(3, new ListNode(2, new ListNode(1, new ListNode(5))))
    );
    expect(reverseBetween(head, 1, 4)).toEqual(expected);
    expect(reverseBetweenII(head1, 1, 4)).toEqual(expected);
  });

  it('test_before_reverse_link_list', () => {
    const head = new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
    );
    const head1 = new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
    );
    const expected = new ListNode(
      5,
      new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(1))))
    );
    expect(reverseBetween(head, 1, 5)).toEqual(expected);
    expect(reverseBetweenII(head1, 1, 5)).toEqual(expected);
  });

  it('test_one_reverse_link_list', () => {
    const head = new ListNode(1);
    const head1 = new ListNode(1);
    expect(reverseBetween(head, 2, 4)).toEqual(head);
    expect(reverseBetween(head1, 2, 4)).toEqual(head1);
  });
});
