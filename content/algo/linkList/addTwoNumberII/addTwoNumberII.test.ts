import { ListNode, addTwoNumbersII } from './index';

const printLink = (head: ListNode | null): number[] => {
  const res: number[] = [];
  for (let node = head; node != null; node = node.next) {
    res.push(node.val);
  }
  return res;
};

describe('test addTwoNumbers for LinkList', () => {
  it('test_two_link_list_same_sum_less_then_9', () => {
    const l1 = new ListNode(
      7,
      new ListNode(2, new ListNode(4, new ListNode(3)))
    );
    const l2 = new ListNode(
      5,
      new ListNode(6, new ListNode(4))
    );
    const expected = [7, 8, 0, 7];
    const result = printLink(addTwoNumbersII(l1, l2));

    expect(result).toEqual(expected);
  });

  it('test_two_link_list_same_sum_0', () => {
    const l1 = new ListNode(0);
    const l2 = new ListNode(0);
    const expected = new ListNode(0);
    expect(printLink(addTwoNumbersII(l1, l2))).toEqual([0]);
  });

  it('test_two_link_list_same_sum_diff_less_than_9', () => {
    const l1 = new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4)))
    );

    const l2 = new ListNode(1, new ListNode(2, new ListNode(3)));

    const expected = [1, 3, 5, 7];
    expect(printLink(addTwoNumbersII(l1, l2))).toEqual(expected);
  });

  
});
