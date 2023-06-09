import { ListNode, mergeTwoLists } from './index';

describe('test mergeTwoLists', () => {
  it('test_two_lists_normal', () => {
    const list1 = new ListNode(
      1,
      new ListNode(3, new ListNode(5, new ListNode(7)))
    );
    const list2 = new ListNode(
      2,
      new ListNode(4, new ListNode(6, new ListNode(8)))
    );
    const result = new ListNode(
      1,
      new ListNode(
        2,
        new ListNode(
          3,
          new ListNode(
            4,
            new ListNode(5, new ListNode(6, new ListNode(7, new ListNode(8))))
          )
        )
      )
    );
    expect(mergeTwoLists(list1, list2)).toEqual(result);
  });

  it('test_empty_two_lists', () => {
    const list1 = null;
    const list2 = null;
    expect(mergeTwoLists(list1, list2)).toBeNull();
  });

  it('test_one_case_empty_and_one_non_empty', () => {
    const list1 = null;
    const list2 = new ListNode(
      2,
      new ListNode(4, new ListNode(6, new ListNode(8)))
    );
    const result = new ListNode(
      2,
      new ListNode(4, new ListNode(6, new ListNode(8)))
    );
    expect(mergeTwoLists(list1, list2)).toEqual(result);
  });

  it('test_num_diff_two_lists', () => {
    const list1 = new ListNode(1, new ListNode(3, new ListNode(5)));
    const list2 = new ListNode(
      2,
      new ListNode(4, new ListNode(6, new ListNode(8)))
    );
    const result = new ListNode(
      1,
      new ListNode(
        2,
        new ListNode(
          3,
          new ListNode(4, new ListNode(5, new ListNode(6, new ListNode(8))))
        )
      )
    );
    expect(mergeTwoLists(list1, list2)).toEqual(result);
  });

  it('test_num_diff_and_sort_diff_two_lists', () => {
    const list1 = new ListNode(1, new ListNode(3, new ListNode(9)));
    const list2 = new ListNode(
      2,
      new ListNode(4, new ListNode(6, new ListNode(8)))
    );
    const result = new ListNode(
      1,
      new ListNode(
        2,
        new ListNode(
          3,
          new ListNode(4, new ListNode(6, new ListNode(8, new ListNode(9))))
        )
      )
    );
    expect(mergeTwoLists(list1, list2)).toEqual(result);
  });
});
