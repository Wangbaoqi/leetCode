
import { ListNode, deleteDuplicates } from '.';

describe('test deleteDuplicates', () => { 


  it('test_deleteDuplicates_three_more_nodes', () => {
    const head = new ListNode(
      1,
      new ListNode(
        2,
        new ListNode(
          2,
          new ListNode(
            3,
            new ListNode(
              3,
              new ListNode(5)
            )
          )
        )
      )
    );
    const expected = new ListNode(
      1,
      new ListNode(5)
    );

    expect(deleteDuplicates(head)).toEqual(expected);
  });

  it('test_deleteDuplicates_before_duplicate_nodes', () => {
    const head = new ListNode(
      1,
      new ListNode(
        1,
        new ListNode(
          1,
          new ListNode(
            3,
            new ListNode(
              3,
              new ListNode(5)
            )
          )
        )
      )
    );
    const expected = new ListNode(
      5,
    );
    expect(deleteDuplicates(head)).toEqual(expected);
  });

  it('test_deleteDuplicates_after_duplicate_nodes', () => {
    const head = new ListNode(
      1,
      new ListNode(
        2,
        new ListNode(
          3,
          new ListNode(
            5,
            new ListNode(
              5,
              new ListNode(5)
            )
          )
        )
      )
    );
    const expected = new ListNode(
      1,
      new ListNode(
        2,
        new ListNode(3)
      )
    );
    expect(deleteDuplicates(head)).toEqual(expected);
  });

  it('test_deleteDuplicates_all_duplicate_nodes', () => {
    const head = new ListNode(
      1,
      new ListNode(
        1,
        new ListNode(
          1,
          new ListNode(
            1,
            new ListNode(
              1,
              new ListNode(1)
            )
          )
        )
      )
    );
    const expected = null;
    expect(deleteDuplicates(head)).toEqual(expected);
  });

  it('test_deleteDuplicates_two_nodes_no_duplicate', () => {
    const head = new ListNode(
      1,
      new ListNode(2)
    );
    const expected = new ListNode(
      1,
      new ListNode(2)
    );
    expect(deleteDuplicates(head)).toEqual(expected);
  });

  
})