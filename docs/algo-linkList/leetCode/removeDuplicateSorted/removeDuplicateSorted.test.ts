import { ListNode, deleteDuplicates } from './index';

describe('deleteDuplicatesLinkList', () => {
  it('test_no_duplicates_link_list', () => {
    const head = new ListNode(
      -1,
      new ListNode(
        1,
        new ListNode(
          2,
          new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))
        )
      )
    );
    const expected = new ListNode(
      -1,
      new ListNode(
        1,
        new ListNode(
          2,
          new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))
        )
      )
    );

    expect(deleteDuplicates(head)).toEqual(expected);
  });

  it('test_delete_duplicates_normal_link_list', () => {
    const head = new ListNode(
      -1,
      new ListNode(
        1,
        new ListNode(
          1,
          new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))))
        )
      )
    );

    const expected = new ListNode(
      -1,
      new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))))
    );
    expect(deleteDuplicates(head)).toEqual(expected);
  });

  it('test_all_duplicates_link_list', () => {
    const head = new ListNode(
      -1,
      new ListNode(
        1,
        new ListNode(
          1,
          new ListNode(1, new ListNode(1, new ListNode(1, new ListNode(1))))
        )
      )
    );
    const expected = new ListNode(-1, new ListNode(1));
    expect(deleteDuplicates(head)).toEqual(expected);
  });

  it('test_after_duplicates_link_list', () => {
    const head = new ListNode(
      -1,
      new ListNode(
        1,
        new ListNode(
          2,
          new ListNode(3, new ListNode(4, new ListNode(4, new ListNode(4))))
        )
      )
    );
    const expected = new ListNode(
      -1,
      new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))))
    );

    expect(deleteDuplicates(head)).toEqual(expected);
  });

  it('text_mid_duplicates_link_list', () => {
    const head = new ListNode(
      -1,
      new ListNode(
        1,
        new ListNode(
          2,
          new ListNode(3, new ListNode(3, new ListNode(4, new ListNode(5))))
        )
      )
    );
    const expected = new ListNode(
      -1,
      new ListNode(
        1,
        new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
      )
    );
    expect(deleteDuplicates(head)).toEqual(expected);
  });

  it('test_all_duplicates_link_list', () => {
    const head = new ListNode(
      1,
      new ListNode(
        1,
        new ListNode(
          1,
          new ListNode(1, new ListNode(1, new ListNode(1, new ListNode(1))))
        )
      )
    );
    const expected = new ListNode(1);
    expect(deleteDuplicates(head)).toEqual(expected);
  });

  it('test_before_after_duplicates_link_list', () => {
    const head = new ListNode(
      1,
      new ListNode(
        1,
        new ListNode(
          1,
          new ListNode(2, new ListNode(3, new ListNode(3, new ListNode(3))))
        )
      )
    );
    const expected = new ListNode(1, new ListNode(2, new ListNode(3)));
    expect(deleteDuplicates(head)).toEqual(expected);
  });

  it('test_one_node_linked_list', () => {
    const head = new ListNode(1);
    expect(deleteDuplicates(head)).toEqual(head);
  });
});
